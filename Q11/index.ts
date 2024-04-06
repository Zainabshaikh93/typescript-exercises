// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, 
// one at a time.




///GPT
// Certainly! Here's how you can store the names of a few friends in an array called names in TypeScript,
// and then print each person's name by accessing each element in the array, 
// one at a time:

// This code snippet uses a for...of loop to iterate over each element in the names array. For each iteration,
//  the variable name holds the current element from the array, 
// and then it's printed to the console with console.log(name);.

// Store the names of a few friends in an array called names
const names: string[] = ["ANUM", "SAMA", "UROOJ", "SHUMAILA"];

// Print each person's name by accessing each element in the array, one at a time
for (const name of names) {
    console.log(name);
}