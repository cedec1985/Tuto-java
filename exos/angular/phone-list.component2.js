angular.
  module('phoneList').
  component('phoneList', {
    templateUrl : 'exos/angular/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
        }]
    });
