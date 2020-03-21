// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?

// if(1 + 1 > 5){
//     console.log("True fact!")
// }else{
//     console.log("LIES!")
// }

// if(4 * 5 <= 20){
//     console.log("True fact!")
// }else{
//     console.log("LIES!")
// }

// if(6 - 2 >= 0){
//     console.log("True fact!")
// }else{
//     console.log("LIES!")
// }

// 2. Dog People vs. Cat People
// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.

// var likesDogs = true

// if(likesDogs === true){
//     console.log("You're a dog person!")
// }else{
//     console.log("You're a cat person")
// }


// 3. Generation Gaps
// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.

// var birthYear = 1950;

// if(birthYear >= 2000){
//     console.log("You're a millenial")
// }else if(birthYear < 2000 && birthYear >= 1980){
//     console.log("You're a Gen-X'er!")
// }else if(birthYear < 1980 && birthYear >= 1955){
//     console.log("You're a Baby-Boomer!!")
// }else{
//     console.log("You're pretty old!")
// }

// 4. Greetings
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.

// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

var personObject={
    name: "Pat",
    prefLang: "French"
}


if(personObject.prefLang === "English"){
    console.log(`Hello, ${personObject.name}.`)
}else if(personObject.prefLang ==="Spanish"){
    console.log(`Hola, ${personObject.name}.`)
}else if(personObject.prefLang==="French"){
    console.log(`Bonjour, ${personObject.name}.`)
}


// 5. Grandma's Kitchen
// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.
// 6. Student Grades
// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.
// Challenge
// Use the weather data from the challenge at the bottom of the the variables and data types chapter.

// If all the high temperatures in the three day forecast are above 85, log, "It's going to be hot as heck all week!" to the console.
// If all of the high temperatures in the three day forecast are below 40, log "It's going to be cold as heck all week!" to the console.
// If any of the low temperatures are below 20, log a sentence about the specific day. (Example: "Wednesday will be cold as heck!")
// If any of the high temperatures are above 95, log a sentence about the specific day. (Example: "Thursday will be hot as heck!")