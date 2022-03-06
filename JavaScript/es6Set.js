/* 
ES6 Set


You are making a program for a sports store warehouse.
The warehouse currently has 7 types of sports equipment and plans to purchase more. The program you are given takes 3 new purchased item types as input.
let products = new Set(["dumbbells", "barbell", "t-shirt", "swim short", "gloves", "training apparatus", "goggle"]); 
NODE
Write a program to add the new items to the given set, then calculate and output to the console the count of item types in the warehouse.

Sample Input
barbell
gloves
bandage

Sample Output
8

Explanation
Before the purchase, we already had a "barbell" and "gloves", but did not have a "bandage". So +1 to our item types: 7+1 = 8.
*/

function main() {
    
    let products = new Set([
        "dumbbells",
        "barbell",
        "t-shirt",
        "swim short",
        "gloves",
        "training apparatus",
        "goggle"
        ]);
    
    var count = 0;
    while(count<3){
        var itemType = readLine();
   products.add(itemType);
   count++      
    }
  console.log(products.size);
}
