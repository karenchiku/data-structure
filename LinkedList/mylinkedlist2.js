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
            next: null,
            prev: null
        }
        this.tail = this.head //pointer tail to head
        this.length = 1
    }

    append(value){
        //core here
        //newNode = new Node(value)
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length ++ 
        return this
    }
    prepend(value){
        //core here
        // newNode = new Node(value)
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length ++ 
        return this
     
    }
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
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        leader.next = newNode
        newNode.prev = leader
        newNode.next = follower
        follower.prev = newNode
        b
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
    remove(index){
        // check params
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        unwantedNode.next.prev = unwantedNode.prev  // don't know 
        this.length--
        return this
    }
}

// 1--> 10 --> 99 --> 5 --> 16

const myLinkedList = new LinkedList(10);
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.insert(2,99)
// myLinkedList.remove(3)
// myLinkedList.insert(3,5)
// console.log(myLinkedList.printList())
// myLinkedList.insert(2,99)

console.log(myLinkedList)