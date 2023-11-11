
//create a function thea reverses a string
// Hi my name is andrei 
// ierdna si eman iH

function reverse(str){

    //check input
    if(!str || str.length<2 || typeof str !== 'string') {
        return 'hmmm that is not good'
    }
    
    //do something 
    let backwards = []
    for(var i= str.length-1; i>=0; i--){  //O(n)
        backwards.push(str[i])  //O(1)
    }
    return backwards.join('')

}

function reverse2(str){
    return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('') 

console.log(reverse3('Hi my name is andrei'))