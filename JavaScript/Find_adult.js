/*
There are a lot of situations where you want to check someone’s age...not just at the bar!

You are given a program that takes the age of the user as input.
Complete the code to check if the user is an adult, and output to the console the corresponding boolean value.

Sample Input
20

Sample Output
true
*/

function main() {
    var age = parseInt(readLine(), 10)
    console.log(age >= 18)  
}
