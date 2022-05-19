// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10. The .length will give us the number of characters from a string, to include the space.
// b) Verify and explain: .length property can be added to the end of a value to return the number of elements within the value. Answer: 10


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o" as we learned in class, the square brackets will return the index of the data type. In this case, the data type is a string. We also learned that index in JavaScript begins at 0 as opposed to 1. We therefore would begin counting at 0 from the "H" and count to 4 - "o."
// b) Verify and explain: JavaScript using zero-indexing, meaning that the first occurence of a value in the data type begins at 0 as opposed to 1.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: As explained above, JavaScript uses zero-indexing. The languages array has four values with the following indices:
// "JavaScript" - 0
// "Ruby" - 1
// "Python" - 2
// "C++" - 3

// the variable index is assigned the number one. Therefore, by logging the number of index '1' of languages, it's logging languages[1], or the 1st index of languages, which would be "Ruby" as "JavaScript" is 0.




// --------------------4) What will this log?


const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())
var sentence = "today is a nice day".toUpperCase()
// a) Your answer: For the array to return in all upper case - ["SATURDAY", "SUNDAY"]
// b) Verify and explain: It was an error and after looking at the syllabus, it appears that the .toUpperCase is for strings, not arrays.



// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: error because typeof should have ()
// b) Verify and explain: The answer was number. After finding out that type of did not need parenthesis, I broke down the code to find out the first thing being done to dataTypes is finding out the length of the array, which was 3. the typeof then is determining what type of value 3 is and not just dataTypes (has 3 string values). This is how the answer is number. 
