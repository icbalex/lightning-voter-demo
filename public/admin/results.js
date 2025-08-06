var _this = this;
angular.module('app').component('results', {
    templateUrl: '/admin/results.html',
    bindings: {
        sessionsByVoteDesc: '=allSessions'
    },
    controller: function () {
        _this.sessionsByVoteDesc.sort(function (session1, session2) { return session2.voteCount - session1.voteCount; });
    }
});
//# sourceMappingURL=results.js.map