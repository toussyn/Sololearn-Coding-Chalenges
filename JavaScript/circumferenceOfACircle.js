/*The Math Object


The program you are given takes the radius of a circle as input.
Complete the given function to take the given radius as an argument and return the circumference of the circle.

Sample Input
5

Sample Output
31.42

Hint
Use 2*π*r formula to calculate the circumference of the circle with radius r.*/

function main() {
    var r = parseInt(readLine(), 10)
    console.log((Math.PI * 2 * r).toFixed(2));
}
