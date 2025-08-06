angular.module('app').factory('users', ($http, $q) => {
  return {
    createNewUser: (newUser) => {
      return $http.post('/api/users', newUser);
    },
    getAllUsers: () => {
      var dfd = $q.defer();
      
      $http.get('/api/users').then((response) => {
        dfd.resolve(response.data);
      })
      
      return dfd.promise;
    }
  }
});