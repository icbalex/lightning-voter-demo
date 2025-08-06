var _this = this;
angular.module('app').component('createNewSession', {
    templateUrl: '/home/createNewSession.html', bindings: {
        userSessions: '='
    },
    controller: function (toastr, userSessions, currentIdentity, sessions) {
        _this.userSessions = userSessions;
        _this.create = function () {
            var newUserSession = {
                title: userSessions.title,
                length: parseInt(userSessions.length),
                abstract: userSessions.abstract,
                userFirstName: currentIdentity.currentUser.firstName,
                userLastName: currentIdentity.currentUser.lastName,
                userId: currentIdentity.currentUser.id,
            };
            sessions.createNewSession(newUserSession).then(function (response) {
                console.log(response);
                _this.userSessions.push(response.data);
            });
        };
    }
});
//# sourceMappingURL=createNewSession.js.map