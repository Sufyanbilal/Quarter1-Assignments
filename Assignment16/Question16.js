// Question16.
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guests = ["Guest1", "Guest2", "Guest3"];
// Print a message about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add a new guest to the beginning of the array
var newGuest1 = "NewGuest1";
guests.unshift(newGuest1);
// Add a new guest to the middle of the array
var newGuest2 = "NewGuest2";
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuest2);
// Add a new guest to the end of the array using push()
var newGuest3 = "NewGuest3";
guests.push(newGuest3);
// Print a new set of invitation messages
console.log("Updated Invitation List:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to the dinner."));
}
