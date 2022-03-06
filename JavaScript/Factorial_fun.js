/*
The for loop


A number's factorial is the product of all positive integers less than or equal to the number.
Write a program that takes a number as input and outputs its factorial to the console.

Sample Input
5

Sample Output
120

Explanation
5*4*3*2*1 = 120
*/

function main() {
    var number = parseInt(readLine(), 10)
  let factorial = 1;
   for (let i = 1; i <= number; i++){
   factorial *= i;
   }
   console.log(factorial)
}
