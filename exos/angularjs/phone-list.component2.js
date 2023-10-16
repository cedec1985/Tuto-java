angular.
  module('phonecatApp').
  component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    template:   '<ul>' +
    '<li ng-repeat="phone in $ctrl.phones">' +
      '<span>{{phone.name}}</span>' +'<p>Total number of phones: {{$ctrl.phones.length}}</p>' +
      '<p>{{phone.snippet}}</p>' +
    '</li>' +
  '</ul>',
    controller: function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';
  
        $http.get('angularjs/phones.json').then(function(response) {
            self.phones = response.data.slice(0, 5);
        });
      }
    });