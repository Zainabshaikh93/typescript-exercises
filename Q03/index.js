//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Zainab Shaikh";
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName
    .toLowerCase()
    .split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
    .join(' ');
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);
//toLowerCase() ensures the entire name is in lowercase to start with a clean slate.
// split(' ') breaks the name into an array of words.
// map(word => word.charAt(0).toUpperCase() + word.slice(1)) iterates over each word, 
// converting the first character to uppercase and then concatenating the remainder 
// of the word in lowercase.
// join(' ') combines the words back into a single string.
// This approach provides a concise, one-liner solution to
//  convert names to title case without explicitly defining a reusable function.
