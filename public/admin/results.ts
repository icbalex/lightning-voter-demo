angular.module('app').component('results', {
  templateUrl: '/admin/results.html',
  bindings: {
    sessionsByVoteDesc: '=allSessions'
  },
  controller: () => {
    this.sessionsByVoteDesc.sort((session1, session2) => session2.voteCount - session1.voteCount
    )
  }
})