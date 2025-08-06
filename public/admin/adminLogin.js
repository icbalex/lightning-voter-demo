var _this = this;
angular.module('app').component('adminLogin', {
    templateUrl: '/admin/adminLogin.html',
    bindings: {},
    controller: function ($location, currentIdentity, auth, toastr) {
        _this.loggedIn = currentIdentity.authenticated();
        if (_this.loggedIn) {
            $location.path('/home');
        }
        _this.login = function () {
            auth.login({
                username: _this.email,
                password: _this.password
            }).then(function () {
                $location.path('/home');
            }, function (err) {
                toastr.error(err);
            });
        };
    }
});
//# sourceMappingURL=adminLogin.js.map