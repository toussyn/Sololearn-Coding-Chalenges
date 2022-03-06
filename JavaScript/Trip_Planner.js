/*
You need to plan a road trip. You are traveling at an average speed of 40 miles an hour.
Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.

Sample Input:
150

Sample Output:
225
*/

function main() {
    var distance = parseInt(readLine(), 10);
    let time = (distance / 40) * 60;
    console.log(time);
}
