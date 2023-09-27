const nemo= ['nemo']

const large = new Array(100000).fill('large')
function findNemo(array){
  for(let i=0; i<array.length; i++){
    if(array[i]==='nemo'){
    //   console.log("Found!")
    }
  }
}

findNemo(large) // O(n) => Linear Time 
const boxes =[0,1,2 ,3,4,5,6,7,8,9,10,s]
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]) // O(1)
    console.log(boxes[1]) // O(1)
}

logFirstTwoBoxes(boxes) // O(2) => Constanct Time


/// O(3+3n) => O(n)
function funChalleng(input) {
  let a = 10 //O(1)
  a = 50 + 3 //O(1)
  for (let i = 0; i < input.length; i++) {
      anothefunction() //O(n)
      let strange = true //O(n)
      a++ //O(n)
  }
  return a //O(1) 
}

