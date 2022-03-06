/*
Тhe result of an exam will be determined as follows։
If the score is
88 and above => excellent
40-87 => good
0-39 => fail

You are given a program that takes the score as input.

Task
Complete the code to output the corresponding result (excellent, good, fail) to the console.

Sample Input
78

Sample Output
good
*/

var score = parseInt(readLine(), 10)
 if (score >= 88){
     console.log("excellent")
     }
 else if (score >= 40 && score <= 87){
     console.log("good")
     }
 else if (score <= 30){
     console.log("fail")
     }
