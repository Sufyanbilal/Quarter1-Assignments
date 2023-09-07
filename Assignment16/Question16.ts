// Question16.
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const guests: string[] = ["Guest1", "Guest2", "Guest3"];

console.log("Good news! We found a bigger dinner table.");
const newGuest1: string = "NewGuest1";
guests.unshift(newGuest1);

const newGuest2: string = "NewGuest2";
const middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuest2);

const newGuest3: string = "NewGuest3";
guests.push(newGuest3);

console.log("Updated Invitation List:");
for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to the dinner.`);
}