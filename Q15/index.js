// Define an initial array of guests
//
var guests = ["Shaikh Family", "Ansari Family", "Syed Family"];
// Loop through the initial guests array and print the first set of invitation messages
console.log("First set of invitations:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner of minds. Your presence would immensely enrich our gathering."));
}
// Announce the guest who can't make it
var guestWhoCantMakeIt = "Shaikh Family";
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " won't be able to join us for the dinner."));
// Replace the guest who can't make it with a new guest
var indexOfGuestWhoCantMakeIt = guests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = "Khan"; // Adding Ada Lovelace to the guest list
}
// Print a second set of invitation messages
console.log("\nSecond set of invitations:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner of minds. Your presence would immensely enrich our gathering."));
}
