var _this = this;
angular.module('app').component('nav', {
    templateUrl: '/nav/nav.html',
    bindings: {},
    controller: function (currentIdentity, sessions, unreviewedSessionCount) {
        _this.currentUser = currentIdentity.currentUser;
        unreviewedSessionCount.updateUnreviewedSessionCount();
        _this.unreviewedSessionCount = unreviewedSessionCount;
    }
});
//# sourceMappingURL=nav.js.map