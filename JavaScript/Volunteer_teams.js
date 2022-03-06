/*
Volunteers have been divided into 5 groups with equal number of members. If any group has fewer than 5 people, more volunteers must be recruited to fill the empty spots.
Write a program that takes the number of volunteers and outputs to the console how many volunteers need to be hired to have 5 equal groups.

Sample Input
24

Sample Output
1

Explanation
The nearest number to 24 that is multiple of 5 is 25, so we need 1 more volunteer (24+1=25) to get 5 equal groups.
Heads up!
Output 0 if we don't need additional volunteers.
*/

function main() {
    var numberVolunteers = parseInt(readLine(), 10)
    // Your code here
    let remainder = numberVolunteers % 5
    if (remainder === 0){
        console.log(0);
        } else {
            console.log(5 - remainder);}
    
}
