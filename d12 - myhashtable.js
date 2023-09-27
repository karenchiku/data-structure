class HashTable{

    constructor(size){
        this.data = new Array(size)

    }

    _hash(key){
        let hash = 0
        for( let i = 0; i < key.length; i++ ){
            hash = (hash + key.charCodeAt(i) * i ) % this.data.length
            // console.log(hash)
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
        console.log(currentBucket)
        if(currentBucket.length > 0){
            for( let i = 0; i<currentBucket.length; i++ ){
                // collusion 
                if(currentBucket[i][0] == key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    //O(1) normal case
    //O(n) if the hash table is so bad

}

const myHashTable = new HashTable(50)
myHashTable.set('grapes',10000)

