angular.module('app').component('userDetails', {
  templateUrl: '/admin/userDetails.html',
  bindings: {
    allUsers: '='
  },
  controller: ($routeParams) => {

    this.user = this.allUsers.find((user) =>
      user.id === parseInt($routeParams.id)
    )
  }
})