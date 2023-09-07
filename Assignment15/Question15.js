// Question15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guests = ["Guest1", "Guest2", "Guest3"];
var guestWhoCantMakeIt = "Guest2";
var newPersonToInvite = "NewGuest";
var indexOfGuestWhoCantMakeIt = guests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPersonToInvite;
    console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
    console.log("Updated Invitation List:");
    for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
        var guest = guests_1[_i];
        console.log("Dear ".concat(guest, ", you are invited to the dinner."));
    }
}
else {
    console.log("".concat(guestWhoCantMakeIt, " was not found in the guest list."));
}
