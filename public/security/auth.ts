angular.module('app').factory('auth', ($q, $http, currentIdentity) => {
  const auth = {
    login: (credentials) => {
      const dfd = $q.defer();
      $http.post('/api/login', credentials).then((response) => {
        currentIdentity.setUser(response.data.user);
        dfd.resolve();
      }, () => {
        dfd.reject("Invalid Credentials");
      });
      return dfd.promise;
    },

    logout: () => {
      const dfd = $q.defer();
      $http.post('/api/logout').then(() => {
        currentIdentity.clearUser();
        dfd.resolve();
      }, () => {
        dfd.reject("Error Logging Out");
      });
      return dfd.promise;
    },

    waitForAuth: () => {
      const dfd = $q.defer();
      $http.get('/api/currentIdentity').then((response) => {
        if (response.data) {
          currentIdentity.setUser(response.data);
        }
        dfd.resolve(currentIdentity);
      });
      return dfd.promise;
    },

    requireLogin: () => {
      return auth.waitForAuth().then(() => {
        if (currentIdentity.authenticated()) {
          return true;
        } else {
          return $q.reject('AUTH_REQUIRED');
        }
      });
    },

    requireAdmin: () => {
      return auth.waitForAuth().then(() => {
        if (currentIdentity.authenticated() && currentIdentity.currentUser && currentIdentity.currentUser.isAdmin) {
          return true;
        } else {
          return $q.reject('AUTH_REQUIRED');
        }
      });
    }
  };

  return auth;
});
