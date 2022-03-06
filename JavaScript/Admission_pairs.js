/*
Entrance to the club is only permitted in pairs.
Take the number of customers in the club as input, and, if all of them have a pair, output to the console "Right", otherwise output "Wrong".

Sample Input
14

Sample Output
Right
*/

function main() {
    var numberGuests = parseInt(readLine(), 10)
    if (numberGuests % 2 === 0){
        console.log("Right")
        } 
    else {
        console.log("Wrong")
        }
    
}
