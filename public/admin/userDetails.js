var _this = this;
angular.module('app').component('userDetails', {
    templateUrl: '/admin/userDetails.html',
    bindings: {
        allUsers: '='
    },
    controller: function ($routeParams) {
        _this.user = _this.allUsers.find(function (user) {
            return user.id === parseInt($routeParams.id);
        });
    }
});
//# sourceMappingURL=userDetails.js.map