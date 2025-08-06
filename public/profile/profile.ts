angular.module('app').component('profile', {
  templateUrl: '/profile/profile.html',
  bindings: {},
  controller: ($location, toastr, currentIdentity) => {

    this.profile = angular.copy(currentIdentity.currentUser);

    this.save = () => {
      currentIdentity.updateUser(this.profile);
      toastr.success('Profile Saved!');
    }

    this.cancel = () => {
      $location.path('/home');
    }
  }
})