function tShirtSorter (str) {
   let sArr = []
   let mArr = []
   let lArr = []
   let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 's') {
            sArr.push(str[i])
        } else if (str[i] === 'm') {
            mArr.push(str[i])
        } else if (str[i] === 'l') {
            lArr.push(str[i])
        }
    }
     result = sArr.join('')
     result += mArr.join('')
     result += lArr.join('')
    return result
    }

// take the string and sort it from small to large.
// split up the string and loop through each letter to see if its in the correct order 
// if not then we move/ replace the letter with what it should be.
// then we will loop through the next letter m
//then l

console.log(tShirtSorter('lms'))

console.log(tShirtSorter('smllms'))




// problem 2 bouns

//Given an object with the following layout (it's a linked list, for those who know what that is):
//I want you to write a function that takes this object as input, and sums all of the values
//of itself and all the nested objects, and return that number.
//Each object's "next" property may be another object of the same format, or it may be null.
//Your function should be able to handle any amount of nexted objects (any size of linked list).

// obj = {
//     value: 6,
//     next: {
//         value: 5,
//         next: {
//             value: 0,
//             next: {
//                 value: 7,
//                 next: null
//             }
//         }
//     }
// }

// //jareds Solution

// function sum (obj) {
//     let theSum = 0;
//     while (obj !== null) {
//         theSum += obj.value
//         obj = obj.next
//     }
//     return theSum

// }



// console.log(sum(obj))

//your function should return 18 for this object

//Bonus: solve this using recursion

