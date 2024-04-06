// Create an array of gadgets
var gadgets = [
    {
        name: "Smartphone",
        brand: "Brand A",
        category: "Electronics",
        releaseYear: 2020
    },
    {
        name: "Laptop",
        brand: "Brand B",
        category: "Computing",
        releaseYear: 2019
    },
    {
        name: "Smartwatch",
        brand: "Brand C",
        category: "Wearables",
        releaseYear: 2021
    },
    {
        name: "Tablet",
        brand: "Brand D",
        category: "Electronics",
        releaseYear: 2018
    },
    {
        name: "E-reader",
        brand: "Brand E",
        category: "Electronics",
        releaseYear: 2022
    }
];
// Iterate over the gadgets array to display its contents
console.log("Gadget Collection:");
gadgets.forEach(function (gadget) {
    console.log("".concat(gadget.name, " by ").concat(gadget.brand, ", Category: ").concat(gadget.category, ", Released in ").concat(gadget.releaseYear));
});
// Create an array of books
// let library: Book[] = [
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         publicationYear: 1960,
//         isRead: true
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         publicationYear: 1949,
//         isRead: false
//     },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         publicationYear: 1925,
//         isRead: true
//     },
//     {
//         title: "One Hundred Years of Solitude",
//         author: "Gabriel García Márquez",
//         publicationYear: 1967,
//         isRead: false
//     },
//     {
//         title: "The Catcher in the Rye",
//         author: "J.D. Salinger",
//         publicationYear: 1951,
//         isRead: true
//     }
// ];
// // Function to display the library contents
// function displayLibrary(books: Book[]): void {
//     console.log("Library Contents:");
//     books.forEach(book => {
//         console.log(`${book.title} by ${book.author}, published in ${book.publicationYear}, Read: ${book.isRead ? "Yes" : "No"}`);
//     });
// }
// // Display the library
// displayLibrary(library);
