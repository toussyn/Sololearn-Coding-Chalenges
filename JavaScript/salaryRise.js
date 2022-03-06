/*
Functions in ECMAScript 6

You have created an array containing the salaries of your factory workers.
The manager at the factory has decided to give salary raises to his best workers and needs to the see the impact of these increases on the budget.
The program you are given takes the salary percent increase as input. Complete the given function to use the percent as a parameter, then calculate and return the total salary increase for all of the workers in the array.

Sample Input
10

Sample Output
3000
*/

function main() {
    var percent = parseInt(readLine(),10);
    console.log(salaryIncrease(percent));
}
var salaries = [3000, 7000, 5000, 15000];

const salaryIncrease = percent => {
var total = 0;
 salaries.forEach(i => {total += i /100 * percent});
return total;

}
