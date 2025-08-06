angular.module('app').component('userList', {
  templateUrl: '/admin/userList.html',
  bindings: {
    allUsers: '='
  },
  controller: () => {

    this.allUsers.sort((user1, user2) => {
      if (user1.firstName < user2.firstName) return -1;
      if (user1.firstName === user2.firstName) return 0;
      if (user1.firstName > user2.firstName) return 1;
    })

    this.users = this.allUsers;
  }
})