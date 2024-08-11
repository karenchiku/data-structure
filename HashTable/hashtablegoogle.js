//Google Question
//Give an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Give an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Give an array = [2,3,4,5]
//It should return undefined

function firsttry(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i+1 ; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i]
            }
        }
    }
    return undefined;
} 

// Computation O(n^2)
// Space O(1)

function secondtry(input){
    let map = {}
    for(let i = 0; i < input.length; i++){
        if(map[input[i]]){
            return input[i]
        }else{
            map[input[i]] = true
        }
    }
    return undefined
} 

//computation O(n)
//space O(n)


console.log(firsttry([2,5,5,2,3]))

console.log(secondtry([2,5,5,2,3]))