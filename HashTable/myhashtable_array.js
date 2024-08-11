class HashTable{

    constructor(size){
        this.data = new Array(size)
        // [['grapes',10000]]
    }
    //private function
    _hash(key){
        let hash = 0
        for( let i = 0; i < key.length; i++ ){
            hash = (hash + key.charCodeAt(i) * i ) % this.data.length
        }
        return hash
    } 
    //O(1)

    set(key,value){
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
        } 
        this.data[address].push([key,value])
        return this.data
        
    }
    //O(1)

    get(key){
        let address = this._hash(key)
        const currentBucket = this.data[address]
 
        if(currentBucket.length > 0){
            for( let i = 0; i<currentBucket.length; i++ ){
                // collusion git
                if(currentBucket[i][0] == key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }
    //O(1) normal case
    //O(n) if the hash table is collusion

    keys(){
        const keyArray = []
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keyArray.push(this.data[i][0][0])
                // console.log(this.data[i])
            }
        }
        // console.log(keyArray)
        return keyArray
    }

   // keys without collision
    keys_more() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }
}

const myHashTable = new HashTable(4)
myHashTable.set('grapes',10000)
myHashTable.set('apples',43)
myHashTable.set('oranges',23)
// console.log(myHashTable.get('grapes'))
console.log(myHashTable.keys_more())
console.log(myHashTable.keys())