/*Rest & Spread

You are making a program to calculate the sum of any number of values.
Complete the given function so that it takes as parameters as many numbers as needed and returns the sum.
*/

function add(...nums){
    let total = 0;
    for (const a of nums) {
        total += a;
    }
    return total;
}

console.log(add(1,2,3));
console.log(add(4,14,5,9,14));
console.log(add(2,36));
