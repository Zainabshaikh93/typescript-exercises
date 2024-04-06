// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.






// Updated guest list including Isaac Newton, Nikola Tesla, and Katherine Johnson
let guests: string[] = ["Shaikh Family", "Ansari Family", "Syed Family","Zohan Family","Qureshi Family","Chudhary Family"];

console.log("Unfortunately, our new dinner table won’t arrive in time, and we can invite only two people for dinner.");

// Removing guests until only two remain
while (guests.length > 2) {
    const removedGuest = guests.pop(); // Remove the last guest from the list
    if (removedGuest) {
        console.log(`Dear ${removedGuest}, I'm terribly sorry, but due to space constraints, I can't invite you to dinner.`);
    }
}

// Informing the remaining guests they are still invited
for (const guest of guests) {
    console.log(`Dear ${guest}, you're still invited to the dinner. Looking forward to your company!`);
}

// Empty the list completely
guests.splice(0, guests.length); // This removes all elements from the array, making it empty

// Print the list to make sure it's empty
console.log("Current guest list:", guests);
