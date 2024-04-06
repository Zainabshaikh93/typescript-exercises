//Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//   It should then accept an arbitrary number of keyword arguments. 
//   Call the function with the required information and two other name-value pairs, 
//   such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.


type CarOptions = {
    color?: string;
    [key: string]: any;
};

function createCar(manufacturer: string, modelName: string, options: CarOptions = {}): object {
    const car = {
        manufacturer,
        modelName,
        ...options,
    };

    return car;
}

// Call the function with required information and additional name-value pairs
const car1 = createCar("Toyota", "Corolla", { color: "blue", sunroof: true });
console.log(car1);

const car2 = createCar("Ford", "Fiesta", { color: "red", transmission: "automatic" });
console.log(car2);
