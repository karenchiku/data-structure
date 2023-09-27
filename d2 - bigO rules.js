
/// 4 Rules

// 1. Worst Case 
// 2. drop the Constants
// 3. Different Terms for inputs
// 4. Drop Non Dominates


// O(n) ==> Rule1 Worst Case 即使有 break 但是 worst case is O(n)

const nemo = ['nemo']
const everyone = ['everyone', 'nemo', 'gill', 'dory', 'squirt']

const large = new Array(100000).fill('large')
function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('runing')
        if (array[i] === 'nemo') {
            console.log("Found!")
            break;
        }
    }
}


// O(2n) ==> O(n) ==> Rule2 Drop the Constants

function compressBoxesTwice(boxes) {

    boxes.forEach((e) => {
        console.log(e)
    })

    boxes.forEach((e) => {
        console.log(e)
    })

}

// O( a + b ) ==> Rule3 Different Terms for inputs

function compressBoxesTwice(boxes, boxes2) {

    boxes.forEach((e) => {
        console.log(e)
    })

    boxes2.forEach((e) => {
        console.log(e)
    })
}

// O(n^2) ==> Quadratic , nested loops

// Log all pairs of array
const boxes = [1, 2, 3, 4, 5]

function LogAlparsofarray(input) {

    for (let i = 0; i < input.length; i++) {
        for (let j = 0 ; j < input.length; j++) {
            console.log(input[i], input[j])

        }
    }
}

// O(n^2 + n ) ==> O( n^2 ) Rule 4 : Drop Non Dominates

function parintAllNumberThenPairSums(numbers){
    numbers.forEach((e) =>{
        console.log(e)
    })
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            console.log(numbers[i] + numbers[j])
        }
    }
   
}

