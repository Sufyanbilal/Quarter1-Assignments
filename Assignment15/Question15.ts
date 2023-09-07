// Question15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

const guests: string[] = ["Guest1", "Guest2", "Guest3"];

const guestWhoCantMakeIt: string = "Guest2";

const newPersonToInvite: string = "NewGuest";

const indexOfGuestWhoCantMakeIt: number = guests.indexOf(guestWhoCantMakeIt);

if (indexOfGuestWhoCantMakeIt !== -1) {
  guests[indexOfGuestWhoCantMakeIt] = newPersonToInvite;
  console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

  console.log("Updated Invitation List:");
  for (const guest of guests) {
    console.log(`Dear ${guest}, you are invited to the dinner.`);
  }
} else {
  console.log(`${guestWhoCantMakeIt} was not found in the guest list.`);
}