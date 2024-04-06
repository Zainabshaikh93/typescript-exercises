//Think of something you could store in a array. For example, 
// you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.


// List of favorite books
let favoriteBooks: string[] = [
    "Sahih Bukhari: Compiled by Imam Muhammad al-Bukhari",
    "Sahih Muslim: Compiled by Muslim ibn al-Hajjaj",
    "Sunan Abu Dawood: Authored by Abu Dawoodd",
    "Sunan at-Tirmidhi: Compiled by Al-Tirmidhi",
    "Sunan an-Nasa'i: Assembled by Ahmad ibn Shu'ayb an-Nasa'i"
];

// Print each book in the list
console.log("My Favorite Books:");
favoriteBooks.forEach(book => console.log(book));
