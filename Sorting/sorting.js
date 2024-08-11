const letter = ['a','z','e','r','t']
const basket = [2,65,34,2,1,7,8]

console.log('2'.charCodeAt(0)) //50
console.log('65'.charCodeAt(0)) //54
console.log('34'.charCodeAt(0)) //51
console.log('6'.charCodeAt(0)) //54

console.log(letter.sort())
console.log(basket.sort(function(a,b){return a-b}))

