// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.
//
// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
//
// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// input - any given number
// output -print the given number and whether it is below, at, or above boiling point
// create a function that takes the parameter of a number to represent a temperature and determine whether by a conditional statement if that number is greater than, less than, or equal to the boiling point of 212 degrees Fahrenheit. If the input is not a number, then print "Was that a number?"

// Expected output for temp1 -> 42 is below the boiling point
// Expected output for temp2 -> 350 is above the boiling point
// Expected output for temp3 -> 212 is at the boiling point
// Expected output for "t" -> Was that a number?

const boilingPoint = (temperature) => {
if (temperature > 212) {
  return `${temperature} is above the boiling point`
} else if (temperature < 212) {
  return `${temperature} is below the boiling point`
} else if (temperature === 212){
  return `${temperature} is at the boiling point`
} else
return "Was that a number?"
}

const temp1 = 42
const temp2 = 350
const temp3 = 212

console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))
console.log(boilingPoint("t"))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Using the .concat() built-in method, concatenate array myNumbers1 with array myNumbers2. Then using the built-in method .length to determine the total number of values between the two arrays. Log this code to get the expected output of 10.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

// Create a variable that can be reassigned value - currentCohortReversed. Using .split("") splie the "Charlie 2022" into single characters as strings - "C", "h", "a", etc. Next, use the new value of currentCohortReversed and reassign its value again by using the built in method .reverse() to reverse all the single character strings. Finally, reassign the currentCohortReversed for the last time by using .reverse built in method to join all the reversed, individual string characters into one string. Log the final value of currentCohort which expected to be "2202 eilrahC"


const currentCohort = "Charlie 2022"

let currentCohortReversed = currentCohort.split("")
currentCohortReversed = currentCohortReversed.reverse()
currentCohortReversed = currentCohortReversed.join("")
console.log(currentCohortReversed)

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Declare a variable as an array with values (test variable). myArray = [13, 34, 5, 10, 27, 42]
// Create a for loop to determine if the numbers inside the array are even or odd, assigning the index i. Start at index[0] of myArray, have the for loop complete once all of the indices of myArray have been determined even or odd.
// Use < to compare that the index number is less than the length of the number of values inside the array. As long as i< the length of myArray (6, and there are 5 indices), have loop log whether even or odd and move on to the next one.
// Determine if index is even by dividing by 2 with modulo being strictly equal to 0. If even, log "even"
// Else statement to log "odd" as anything other than 0 is not an even number.

const myArray = [13, 34, 5, 10, 27, 42]
for(let i=0; i<myArray.length; i++){
  if (myArray[i] % 2 === 0) {
    console.log("even")
  } else {
    console.log("odd")
  }
}
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Create a function subtractFromLargerNum with two inputs (num1 & num2) with number values. Whichever number has the lesser value, will be subtracted from the greater number and the difference will be logged.
// Within the function's codeblock, first use > comparator to determine if num1 is greater than num2. If this returns true, then subtract num2 from num1. If num2 is greater than num1, return the difference of num2 - num1. If any value that's not a number is entered then return "Oops, there was an error"


// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24


const subtractFromLargerNum = (num1,num2) => {
  if (num1 > num2) {
    return num1 - num2
  } else if (num2 > num1) {
    return num2 - num1
  } else {
    return "Oops, there was an error"
  }
}
console.log(subtractFromLargerNum(number1,number2)) -> 42
console.log(subtractFromLargerNum(number3,number4)) -> 3
console.log(subtractFromLargerNum("number1",number2)) -> "Oops, there was an error"
