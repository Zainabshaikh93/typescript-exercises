//Greetings: Start with the array you used in Exercise 11, but instead of 
// just printing each person’s name, print a message to them.
//  The text of each message should be the same, but each message 
//  should be personalized with the person’s name.

const names: string[] = ["ANUM", "SAMA", "UROOJ", "SHUMAILA"];



// Print each person's name by accessing each element in the array, one at a time
for (const name of names) {
    console.log(`Hello ${name}! It's great to see you.`);
}


