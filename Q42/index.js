//Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase
// the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
var magicians = ["David Copperfield", "Penn & Teller", "Dynamo", "Criss Angel"];
// Modify the magicians' names to include "the Great"
magicians = make_great(magicians);
// Show the modified list of magicians
show_magicians(magicians);
