/*
The while loop


Write a program-timer, that will take the count of seconds as input and output to the console all the seconds until timer stops.

Sample Input
4

Sample Output
4
3
2
1
0
*/

function main() {
    var seconds = parseInt(readLine(), 10)
while (seconds >= 0){
    console.log(seconds);
    seconds--;
    }  
}
