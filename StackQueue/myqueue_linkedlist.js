class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  //FIFO
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    // return the first thing we added in the stack
    peek() {
        return this.first
    }
    // reman store |  joy <-- matt <-- pavel 
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }

        this.length++
        return this
    }
    // reman store |  joy <-- matt <-- pavel 
    dequeue() {
        if(!this.first){
            return null
        }
        if(this.first == this.last){
            this.last = null
        }
        // const holdingPoint = this.first
        this.first = this.first.next
        this.length--
        return this 
    }
    //isEmpty;
  }

  const myQueue = new Queue();
  myQueue.enqueue('Joy')
  myQueue.enqueue('Matt')
  myQueue.enqueue('Pavel')
  myQueue.dequeue()

  console.log(myQueue.peek())
