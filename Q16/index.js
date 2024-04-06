// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
// Initial guest list with Ada Lovelace replacing Leonardo da Vinci
var guests = ["Shaikh Family", "Ansari Family", "Syed Family"];
// Announcing a bigger dinner table
console.log("Great news, everyone! We've found a bigger dinner table, so more guests will join us.");
// Add one new guest to the beginning of the array
guests.unshift("Zohan Family");
// Calculate the middle position of the array for the new guest
var middleIndex = Math.floor(guests.length / 2);
// Add one new guest to the middle of the array
guests.splice(middleIndex, 0, "Qureshi Family");
// Add one new guest to the end of the array (TypeScript doesn't have append(), so we use push())
guests.push("Chudhary Family");
// Print a new set of invitation messages
console.log("\nNew set of invitation messages:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", the dinner party is on, and we have a bigger table now! You're invited to a night of enlightening conversation and good food."));
}
