// 4 steps
// 1.clearifications
// 2.think out load
// 3.talk before coding
// 4.test it empty examples & real exaples

// Question ? the two arrays has the same elements or not
// const array1 = ['a','b','c','d']
// const array2 = ['e','x','y','i']

/// -----

// const array1 = ['a','b','c','x']
// const array2 = ['e','x','y','i']

// 2 parameters - array , no size limt, chart not integer
// output true or false

// 2 forloop to solve the quesiton = > O(a * b) time complexity 

// create mapping
// arr1 ==> obj {
//    a: true,
//   b: true,
//    c: true,
//    x: false,
// }

function findthearray(arr1, arr2) {

    const map = {}; // O(a)
    // loop trough first array and create object where properties === itmes in the array
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            map[arr[i]] = true;
        }
    }
    // loop trough second array and check if item in second array exist on create object

    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            return true;
        }
        return false;
    }

}

// O(a+b) Time Complexity is better
// O(a) Space Complexity

