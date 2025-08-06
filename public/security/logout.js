var _this = this;
angular.module('app').controller('loginCtrl', function ($location, currentIdentity, auth, toastr) {
    if (currentIdentity.authenticated()) {
        $location.path('/home');
    }
    _this.login = function () {
        auth.login({
            username: _this.email,
            password: "pass"
        }).then(function () {
            $location.path('/home');
        }, function (err) {
            toastr.error(err);
        });
    };
});
//# sourceMappingURL=logout.js.map