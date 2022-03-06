/*Class Methods in ES6


You are making a program so that students are able to calculate their average of 3 exam scores.
The given program takes the scores of 3 exams as input and declares the Exams class.
Add a static method average() to class Exams, which will take the scores as parameters, and calculate and return the average score rounded to the nearest integer so that the code in main works correctly.

Sample Input
74
80
68

Sample Output
74*/

function main() {
    var exam1 = parseInt(readLine(), 10);
    var exam2 = parseInt(readLine(), 10);
    var exam3 = parseInt(readLine(), 10);
    
    console.log(Exams.average(exam1,exam2,exam3));
    
}
class Exams{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    static average(a, b, c) {
        return Math.round((a+b+c)/3);
    }
}
