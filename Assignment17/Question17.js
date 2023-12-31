// Question17.
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guests = ["Guest1", "Guest2", "Guest3", "Guest4", "Guest5"];
console.log("Sorry, we can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove and get the last guest
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to the dinner."));
}
guests.pop();
guests.pop();
console.log("Updated Invitation List:");
console.log(guests);
