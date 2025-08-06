var _this = this;
angular.module('app').component('createUsers', {
    templateUrl: '/admin/createUsers.html',
    bindings: {},
    controller: function (parseNames, users, toastr) {
        _this.import = function () {
            var people = parseNames(_this.namesblob);
            people.forEach((function (person) {
                users.createNewUser({
                    email: person.email,
                    password: "pass",
                    firstName: person.firstName,
                    lastName: person.lastName
                }).catch(function (error) {
                    toastr.error("User already exists: " + person.email);
                });
            }));
            toastr.success("Users Created!");
        };
    }
});
//# sourceMappingURL=createUsers.js.map