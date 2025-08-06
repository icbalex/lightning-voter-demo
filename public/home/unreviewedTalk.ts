angular.module('app').component('unreviewedTalk', {
  templateUrl: '/home/unreviewedTalk.html',
  bindings: {
    session: '=',
    voteYes: '&',
    voteNo: '&'
  },
  controller: ($scope) => {

    $scope.yes = () => {
      this.voteYes();
    }

    $scope.no = () => {
      this.voteNo();
    }
  }
})