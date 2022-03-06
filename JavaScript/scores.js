/*Loops in ECMAScript 6


Students need to score at least 70 points to pass an exam. The given program declares an array with results.
Write a program to count and output to the console the number of students who pass the exam.*/

let scores = [68,95,54,84,77,75,63,74,69,80,71,63];
let count = 0;

for (let num of scores){
    if (num >= 70){
        count++;
    }
}
console.log(count); 
