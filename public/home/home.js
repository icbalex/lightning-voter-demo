var _this = this;
angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    bindings: {
        userSessions: '='
    },
    controller: function (currentIdentity, sessions, toastr, unreviewedSessionCount) {
        _this.currentUser = currentIdentity.currentUser;
        _this.setNextSessionToReview = function () {
            sessions.getNextUnreviewedSession(currentIdentity.currentUser.id).then(function (response) {
                _this.currentSessionToReview = response.data;
            });
        };
        _this.setNextSessionToReview();
        _this.voteYes = function () {
            sessions.incrementVote(_this.currentSessionToReview.id)
                .then(function () { return sessions.addReviewedSession(_this.currentUser.id, _this.currentSessionToReview.id); })
                .then(function () {
                _this.setNextSessionToReview();
                // pull updated value
                unreviewedSessionCount.updateUnreviewedSessionCount();
            });
        };
        _this.voteNo = function () {
            sessions.addReviewedSession(_this.currentUser.id, _this.currentSessionToReview.id)
                .then(function () {
                _this.setNextSessionToReview();
                // pull updated value
                unreviewedSessionCount.updateUnreviewedSessionCount();
            });
        };
    }
});
//# sourceMappingURL=home.js.map