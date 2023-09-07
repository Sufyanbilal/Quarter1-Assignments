// Question34.
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an 
//additional sentence, such as I really love pizza!
var fav_pizza = ["Pepperoni", "Margherita", "Supreme"];
for (var i = 0; i < fav_pizza.length; i++) {
    var Mypizza = fav_pizza[i];
    console.log("I Like ".concat(Mypizza, " piiza."));
}
console.log("I really love", fav_pizza[0]);
console.log("I really love", fav_pizza[1]);
console.log("I really love", fav_pizza[2]);
console.log("I really love pizza!");
