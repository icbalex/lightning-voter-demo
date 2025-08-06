var _this = this;
angular.module('app').component('userList', {
    templateUrl: '/admin/userList.html',
    bindings: {
        allUsers: '='
    },
    controller: function () {
        _this.allUsers.sort(function (user1, user2) {
            if (user1.firstName < user2.firstName)
                return -1;
            if (user1.firstName === user2.firstName)
                return 0;
            if (user1.firstName > user2.firstName)
                return 1;
        });
        _this.users = _this.allUsers;
    }
});
//# sourceMappingURL=userList.js.map