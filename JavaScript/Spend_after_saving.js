/*
Function Parameters

"Do not save what is left after spending; instead spend what is left after saving." said Warren Buffett. Inspired by these words Jack decided to save 15% of his monthly salary.
You are given a program that takes salary as input. Complete the function in order to calculate and output the savings.

Sample Input
200

Sample Output
30
*/

function main() {
    var salaryAmount = parseInt(readLine(), 10);
    getSavings(salaryAmount);
}

function getSavings(salary) {
    console.log((salary / 100) * 15)
}
