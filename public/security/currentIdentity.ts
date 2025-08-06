angular.module('app').factory('currentIdentity', ($http, $q) => {
  return {
    currentUser: null,
    
    setUser: (user) => {
      this.currentUser = user;
    },
    clearUser: () => {
      this.currentUser = null;
    },
    authenticated: () => {
      return !!this.currentUser;
    },
    updateUser: (newUserObj) => {
      var dfd = $q.defer();
      
      
      $http.put('/api/users/' + this.currentUser.id, newUserObj).then((response) => {
        this.currentUser.firstName = newUserObj.firstName;
        this.currentUser.lastName = newUserObj.lastName;
        dfd.resolve();
      }, (response) => {
        dfd.reject("Error Logging Out");
      })
      return dfd.promise;
    }
  }
});