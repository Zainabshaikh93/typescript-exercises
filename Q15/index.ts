// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of
//  your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of 
// the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.






// Define an initial array of guests

//
let guests: string[] = ["Shaikh Family", "Ansari Family", "Syed Family"];

// Loop through the initial guests array and print the first set of invitation messages
console.log("First set of invitations:");
for (const guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner of minds. Your presence would immensely enrich our gathering.`);
}

// Announce the guest who can't make it
const guestWhoCantMakeIt: string = "Shaikh Family";
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} won't be able to join us for the dinner.`);

// Replace the guest who can't make it with a new guest
const indexOfGuestWhoCantMakeIt = guests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = "Khan"; // Adding Ada Lovelace to the guest list
}

// Print a second set of invitation messages
console.log("\nSecond set of invitations:");
for (const guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner of minds. Your presence would immensely enrich our gathering.`);
}
