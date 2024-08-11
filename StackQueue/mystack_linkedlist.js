class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    // return the last thing we added in the stack
    peek() {
        return this.top
    }
    // add a new item
    //     discord
    //     udemy
    //     google
    //  ----------
    push(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.top = newNode
            this.bottom = newNode
        }else{
            const holdingPoint = this.top
            this.top = newNode
            this.top.next = holdingPoint
        }

        this.length++
        return this
    }
    // remove the last thing we added in the stack
    //     discord
    //     udemy
    //     google
    //  ----------
    pop() {
        if (!this.top){
            return null
        }
        if(this.top == this.bottom){
            this.buttom = null
        }
        // const holdingPoint = this.top
        this.top = this.top.next
        this.length--

        return this
    }

    //isEmpty
}

const myStack = new Stack();
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
myStack.pop()
myStack.pop()
console.log(myStack.peek())

