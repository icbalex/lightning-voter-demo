var _this = this;
angular.module('app').factory('currentIdentity', function ($http, $q) {
    return {
        currentUser: null,
        setUser: function (user) {
            _this.currentUser = user;
        },
        clearUser: function () {
            _this.currentUser = null;
        },
        authenticated: function () {
            return !!_this.currentUser;
        },
        updateUser: function (newUserObj) {
            var dfd = $q.defer();
            $http.put("/api/users/" + _this.currentUser.id + ", " + newUserObj).then(function (response) {
                _this.currentUser.firstName = newUserObj.firstName;
                _this.currentUser.lastName = newUserObj.lastName;
                dfd.resolve();
            }, function (response) {
                dfd.reject("Error Logging Out");
            });
            return dfd.promise;
        }
    };
});
//# sourceMappingURL=currentIdentity.js.map