
//LIFO
class Stack {
    constructor() {
        this.array = [];
    }
    // return the last thing we added in the stack
    //     discord
    //     udemy
    //     google
    //  ----------
    peek() {
        return this.array[this.array.length - 1];
    }
    // add a new item
    //    [ google , udemy, discord]

    push(value) {

        this.array.push(value) 
        return this
    }
    // remove the last thing we added in the stack
    //    [ google , udemy, discord]
    pop() {
        this.array.pop() 
        return this
    }

    //isEmpty
}
const myStack = new Stack();
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
myStack.pop()
// myStack.pop()
console.log(myStack.peek())

