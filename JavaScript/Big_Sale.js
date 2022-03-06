/* Time to go shopping!
Everything in the store has been discounted by 20%.
You are given a program that takes the price of an item as input. 
Complete the program so that it outputs the discounted price to the console.

Sample Input
100

Sample Output
80
*/

function main() {
    var oldPrice = parseInt(readLine(), 10)

    let newPrice = oldPrice/100 *80;
    console.log(newPrice) 
}
