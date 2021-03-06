/*
Bob was hired as an airport information officer and needs to generate status messages for each flight․ Let’s help him!
Complete the given program by fixing the constructor, making a flight object, and assign it to given variable to correctly execute the corresponding message.
Flight ID and the flight status(landed, on time, delayed, etc.) are taken as input.

Sample Input
NGT 929
landed

Sample Output
Flight NGT 929 has landed
*/

function main() {
    var flightNumber = readLine();
    var flightStatus = readLine();
    
    var flight1 = new Flight(flightNumber, flightStatus);
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)
    
}

function Flight(flightNumber, status) {
    this.number = flightNumber;
    this.status = status;
}
