//Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, 
// inviting them to dinner.
// Define an array of guests
var guests = ["Shaikh Family", "Ansari Family", "Syed Family"];
// Loop through the guests array and print an invitation message for each
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner of minds. Your presence would immensely enrich our gathering."));
}
