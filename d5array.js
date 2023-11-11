
// Data structure : Array

const string = ['a','b','c','d']
//4*4 = 16 bytes of storage

//lookup
console.log(string[2])

//push
string.push('e') //O(1)

//pop remove the last element
string.pop() //O(1)

//unshift
string.unshift('x') //O(n)
// ['x', 'a', 'b', 'c'] => re-index 0,1,2,3,4

console.log(string)
[ 'x', 'a', 'b', 'c', 'd' ]//
string.splice(3, 0, 'alien') //O(n)
console.log(string)
//[ 'x', 'a', 'b', 'alien', 'c', 'd' ] ==> re-index 4,5
