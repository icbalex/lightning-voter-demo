angular.module('app').component('adminLogin', {
  templateUrl: '/admin/adminLogin.html',
  bindings: {
  },
  controller: ($location, currentIdentity, auth, toastr) => {

    this.loggedIn = currentIdentity.authenticated();
    if (this.loggedIn) {
      $location.path('/home');
    }

    this.login = () => {
      auth.login({
        username: this.email,
        password: this.password
      }).then(() => {
        $location.path('/home');
      }, (err) => {
        toastr.error(err);
      })
    }
  }
})