// 10 --> 5 --> 16
// let myLinkedList = {
//     head: {
//         valuse: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null
        }
        this.tail = this.head //pointer tail to head
        this.length = 1
    }

    append(value){
        //core here
        //newNode = new Node(value)
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length ++ 
        return this
    }

    //O (1)
    prepend(value){
        //core here
        // newNode = new Node(value)
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length ++ 
        return this
     
    }
    //O (1)
    
    printList(){
        const array =[];
        let currenNode = this.head;
        while(currenNode!=null){
            array.push(currenNode.value)
            currenNode = currenNode.next
        }
        return array
    }
    insert(index, value){
        // check params
        if( index >= this.length){
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
        
        const leader = this.traverseToIndex(index-1)
        const holdingPoint = leader.next
        leader.next = newNode
        newNode.next = holdingPoint
        this.length++
        
        return this
    }

    traverseToIndex(index){
        //check params
        let counter = 0
        let currenNode = this.head
        while( counter !== index){           
            currenNode = currenNode.next
            counter++
        }
        return currenNode
    }
    //O (n)

    remove(index){
        // check params
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
        return this
    }
    reverse(){
        if(!this.head.next){
            return this
        }
        let first = this.head

 
        let second = first.next
        while(second){
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.tail = this.head
        this.head.next =  null // last minutes to be null
        this.head = first
    }
}

// 1--> 10 --> 99 --> 5 --> 16

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2,99)
myLinkedList.remove(3)
myLinkedList.insert(3,5)
myLinkedList.reverse()
console.log(myLinkedList.printList())
// myLinkedList.insert(2,99)

console.log(myLinkedList)