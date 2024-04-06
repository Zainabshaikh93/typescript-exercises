// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

// Store the person's name with whitespace characters
const nameWithWhitespace: string = "\t\n Zainab Shaikh \n\t";

// Print the name with whitespace
console.log("Name with whitespace:", JSON.stringify(nameWithWhitespace));

// Strip the whitespace and print the name again
const strippedName: string = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);


//GPT
//To demonstrate storing a person's name with whitespace characters (including \t for tab and \n for a newline) and 
// then stripping these whitespace characters away, you can follow this example in TypeScript. 
// TypeScript, like JavaScript, doesn't have a built-in strip method as in some other languages, 
// but you can use trim(), which removes whitespace from both ends of a string.
//  Here's how you can do it:
