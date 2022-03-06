/*The Math Object


Create a function that returns the century depending on the year given as a parameter.

Sample Input
1993

Sample Output
20

Hint
You need to divide 1993 by 100: 1993/100 = 19.93, then round it to the nearest integer, which is 20 in this case.*/

function main() {
    var year = parseInt(readLine(), 10)
    console.log(calcCent(year));   
}

function calcCent(x){
    return (Math.ceil(x/100))
}
