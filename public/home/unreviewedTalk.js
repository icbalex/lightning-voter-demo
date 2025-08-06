angular.module('app').component('unreviewedTalk', {
  templateUrl: '/home/unreviewedTalk.html',
  bindings: {
    session: '=',
    voteYes: '&',
    voteNo: '&'
  },
  controller: function ($scope) {

    $scope.yes = function () {
      this.voteYes();
    }

    $scope.no = function () {
      this.voteNo();
    }
  }
})