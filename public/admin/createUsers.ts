angular.module('app').component('createUsers', {
  templateUrl: '/admin/createUsers.html',
  bindings: {

  },
  controller: (parseNames, users, toastr) => {

    this.import = () => {
      const people = parseNames(this.namesblob);
      people.forEach(((person) => {
        users.createNewUser({
          email: person.email,
          password: "pass",
          firstName: person.firstName,
          lastName: person.lastName
        }).catch((error) => {
          toastr.error(`User already exists: ${person.email}`)
        })
      }));

      toastr.success("Users Created!")
    }
  }
})