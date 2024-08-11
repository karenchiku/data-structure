// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n){  //O(n)
    let answerlist = [] // answerlist = [0, 1]
    answerlist.push(0)
    answerlist.push(1)

    
    for (let i=2; i<=n; i++){
        answerlist.push(answerlist[i-2] + answerlist[i-1])
    }   
    return answerlist[n]
}

console.log(fibonacciIterative(8))


function fibonacciRecursive(n) {  ///O(2^n)


    if(n < 2){
        return 2
    }

    return fibonacciRecursive(n-2)+fibonacciRecursive(n-1) 
  
}

console.log(fibonacciRecursive(8)) 