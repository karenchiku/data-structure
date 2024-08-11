// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    let answers = 1
    if(number === 2){
        return 2
    }
    
    return number * findFactorialRecursive(number-1) //

  }
  
// O(n)

  function findFactorialIterative(number) {
    
    let answer = 1
    for (let i =2; i <= number; i++) {
        answer = answer * i
    }

    return answer;
  }

  
  console.log(findFactorialRecursive(5))
  console.log(findFactorialIterative(5))

//O(n)

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer abd return when needed. Usually you have 2 returns