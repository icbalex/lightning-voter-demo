var _this = this;
angular.module('app').component('unreviewedTalk', {
    templateUrl: '/home/unreviewedTalk.html',
    bindings: {
        session: '=',
        voteYes: '&',
        voteNo: '&'
    },
    controller: function ($scope) {
        $scope.yes = function () {
            _this.voteYes();
        };
        $scope.no = function () {
            _this.voteNo();
        };
    }
});
//# sourceMappingURL=unreviewedTalk.js.map