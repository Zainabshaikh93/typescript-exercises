var current_users = ['user1', 'admin', 'testuser', 'demo', 'john'];
var new_users = ['TestUser', 'James', 'ADMIN', 'jane', 'JOHN'];
// Convert current_users to lowercase for case-insensitive comparison
var lowerCurrentUsers = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    if (lowerCurrentUsers.includes(newUser.toLowerCase())) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
}
