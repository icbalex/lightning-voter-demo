angular.module('app').component('createNewSession', {
  templateUrl: '/home/createNewSession.html',  bindings: {
    userSessions: '='
  },
  controller: (toastr, userSessions, currentIdentity, sessions) => {
    this.userSessions = userSessions;

    this.create = () => {
      var newUserSession = {
        title: userSessions.title,
        length: parseInt(userSessions.length),
        abstract: userSessions.abstract,
        userFirstName: currentIdentity.currentUser.firstName,
        userLastName: currentIdentity.currentUser.lastName,
        userId: currentIdentity.currentUser.id,
      }

      sessions.createNewSession(newUserSession).then((response) => {
        console.log(response);
        this.userSessions.push(response.data);
      })
    }
  }
})
