angular.
  module('phonecatApp').
  component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    template:   '<ul>' +
    '<li ng-repeat="phone in $ctrl.phones">' +
      '<span>{{phone.name}}</span>' +'<p>Total number of phones: {{$ctrl.phones.length}}</p>' +
      '<p>{{phone.snippet}}</p>' +
    '</li>' +
  '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];
      this.orderProp = 'age';
    }
  });