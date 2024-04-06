var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var destinations4 = ["Kyoto, Japan", "Reykjavik, Iceland", "Cape Town, South Africa", "Buenos Aires, Argentina", "Cairo, Egypt"];
// Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", __spreadArray([], destinations4, true).sort().reverse());
