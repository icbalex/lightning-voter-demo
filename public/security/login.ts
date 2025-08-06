angular.module('app').component('login', {
  templateUrl: '/security/login.html',
  bindings: {},
  controller: ($location, currentIdentity, auth, toastr) => {

    if (currentIdentity.authenticated()) {
      $location.path('/home');
    }

    this.login = () => {
      auth.login({
        username: this.email,
        password: "pass"
      }).then(() => {
        $location.path('/home');
      }, (err) => {
        toastr.error(err);
      })
    }
  }
})