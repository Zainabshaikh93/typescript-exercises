//Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.



type Gadget = {
    name: string;
    brand: string;
};

let gadgets: Gadget[] = [
    { name: "Smartphone", brand: "Brand A" },
    { name: "Laptop", brand: "Brand B" }
];

// Intentionally accessing an index that doesn't exist to produce an error
console.log("Intentional Error, accessing a non-existent index:");
try {
    console.log(gadgets[10].name); // This will throw an error because index 10 doesn't exist
} catch (error) {
    console.error("Error accessing index 10:", error);
}

// Correcting the error by accessing a valid index
console.log("\nCorrecting the error by accessing a valid index:");
console.log(gadgets[1].name); // Correctly accessing the second element

