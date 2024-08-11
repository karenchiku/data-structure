
  //FIFO
  class Queue {
    constructor() {
      this.stack = []    // reman store |  joy <-- matt <-- pavel 
    }
    // return the first thing we added in the stack
    // reman store |  joy <-- matt <-- pavel 
    peek() {
        return this.stack[0]
    }
    // reman store |  joy <-- matt <-- pavel 
    push(value) {

        this.stack.push(value) 
        return this
    }
    // reman store |  joy <-- matt <-- pavel 
    pop() {
        
        const first = this.stack[0]
        const newstack = []
        for (let i = 1; i < this.stack.length; i++){
            newstack.push(this.stack[i])
        }
        this.stack = newstack
        return this
    }   
    empty(){
        if(this.stack.length==0){
            return true
        }else{
            return false
        }
    }
  }

  const myQueue = new Queue();
  myQueue.push('1')
  myQueue.push('2')
//   myQueue.peek()
  myQueue.pop()
  myQueue.pop()
  myQueue.pop()

  console.log(myQueue.empty())
  console.log(myQueue.peek())
