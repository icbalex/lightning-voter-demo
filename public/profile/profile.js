var _this = this;
angular.module('app').component('profile', {
    templateUrl: '/profile/profile.html',
    bindings: {},
    controller: function ($location, toastr, currentIdentity) {
        _this.profile = angular.copy(currentIdentity.currentUser);
        _this.save = function () {
            currentIdentity.updateUser(_this.profile);
            toastr.success('Profile Saved!');
        };
        _this.cancel = function () {
            $location.path('/home');
        };
    }
});
//# sourceMappingURL=profile.js.map