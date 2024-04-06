//Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, 
// inviting them to dinner.


// Define an array of guests
const guests: string[] = ["Shaikh Family", "Ansari Family", "Syed Family"];

// Loop through the guests array and print an invitation message for each
for (const guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner of minds. Your presence would immensely enrich our gathering.`);
}
