var _this = this;
angular.module('app').factory('unreviewedSessionCount', function (sessions, currentIdentity) {
    return {
        value: 0,
        updateUnreviewedSessionCount: function () {
            sessions.getUnreviewedCount(currentIdentity.currentUser.id)
                .then(function (response) {
                _this.value = response.data.count;
            });
        }
    };
});
//# sourceMappingURL=unreviewedSessionCount.js.map