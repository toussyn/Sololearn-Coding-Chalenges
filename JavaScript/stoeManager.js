/*Store Manager


You are working on a Store Manager program, which stores the prices in an array.
You need to add functionality to increase the prices by the given amount.
The increase variable is taken from user input. You need to increase all the prices in the given array by that amount and output to the console the resulting array.*/

function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    let t = [];
    for (let i = 0; i < prices.length; i++){
       t.push(prices[i] + increase);
    }
    console.log(t);
}