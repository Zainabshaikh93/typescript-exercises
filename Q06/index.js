// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.
// Store the person's name with whitespace characters
var nameWithWhitespace = "\t\n Zainab Shaikh \n\t";
// Print the name with whitespace
console.log("Name with whitespace:", JSON.stringify(nameWithWhitespace));
// Strip the whitespace and print the name again
var strippedName = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);
