angular.module('app').component('home', {
  templateUrl: '/home/home.html',
  bindings: {
    userSessions: '='
  },
  controller: (currentIdentity, sessions,
    toastr, unreviewedSessionCount) => {


    this.currentUser = currentIdentity.currentUser

    this.setNextSessionToReview = () =>  {
      sessions.getNextUnreviewedSession(currentIdentity.currentUser.id).then((response) => {
        this.currentSessionToReview = response.data;
      })
    }
    this.setNextSessionToReview();


    this.voteYes = () => {
      sessions.incrementVote(this.currentSessionToReview.id)
        .then(() =>  sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id))
        .then(() => {
          this.setNextSessionToReview();

          // pull updated value
          unreviewedSessionCount.updateUnreviewedSessionCount();
        })
    }

    this.voteNo = () => {
      sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
        .then(() =>  {
          this.setNextSessionToReview();

          // pull updated value
          unreviewedSessionCount.updateUnreviewedSessionCount();
        })
    }
  }
})