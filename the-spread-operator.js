/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr2); //displays 1,2,3,4
console.log(arr1); //also displays 1,2,3,4 because arr2 points to arr1

// Copying an array
let arr3 = [4,5,6,];
let arr4 = [...arr3]; //... operator 'spreads' values into arr4 but arr4 does not point to arr3.

arr4.push(7); //will not affect arr3 because of spread operator

// Copying an object

let obj = {
    a: 1,
    b: 2,
    c: 3
};

let obj2 = {...obj1, d:4}; //spreads object 1 into object 2 and adds d as fourth property
let obj3 = {...obj1, b:5}; //spreads object 1 into object 3 but changes b in object 3 to 5

// Copying only part of an array/object

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"]; //Spreads all these values into arr5

///////REST FUNCTIONS//////


//Regular function call
const sumAll = (a,b,c) => a + b + c;
let sum = sumAll(1,2,3);

//Extra arguments are ignored
let sum2 = sumAll(1,2,3,4,5,6);

//Function using ...rest
const sumRest = (a,b,c, ...rest) => {
    let sum = a + b + c;
    for(let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1,2,3,4,5,6);