const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers1 = [99, 44, 6];
//99 46 6  2
//46 6 99 1

function bubbleSort(array) {
    //Code here
    const n = array.length
    let sorted = array
    for (let loop = n-1; loop>0; loop--) 
    for (let loop = n-1; loop>0; loop--) 
    {
        for(let i=0; i<loop; i++){
            // Swap nu,ber
            if(sorted[i]>sorted[i+1]){
                let temp = sorted[i]
                sorted[i] = sorted[i+1]
                sorted[i+1] = temp       
            }
        }
    }
    return sorted;
}

console.log(numbers);
console.log(bubbleSort(numbers))