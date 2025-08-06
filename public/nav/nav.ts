angular.module('app').component('nav', {
  templateUrl: '/nav/nav.html',
  bindings: {
  },
  controller: (currentIdentity, sessions, unreviewedSessionCount) => {
    this.currentUser = currentIdentity.currentUser;

    unreviewedSessionCount.updateUnreviewedSessionCount();
    this.unreviewedSessionCount = unreviewedSessionCount;
  }
});