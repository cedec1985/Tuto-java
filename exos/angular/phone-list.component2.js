angular.
  module('phoneList').
  component('phoneList', {
    templateUrl : 'angular/phone-list.template.html',
    controller: 
      function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';

        $http.get('phones.json').then(function(response) {
          self.phones = response.data.slice(0,5);
        });
    }
  });