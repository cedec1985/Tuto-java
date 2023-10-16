angular.
  module('phoneList').
  component('phoneList', {
    template:  '<ul>' +
    '<li ng-repeat="phone in $ctrl.phones">' +
      '<span>{{phone.name}}</span>' +'<p>Total number of phones: {{$ctrl.phones.length}}</p>' +
      '<p>{{phone.snippet}}</p>' + 
    '</li>' +
  '</ul>' +  '</ul>'+'<ul class="phones">'+
  '<li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp" class="thumbnail">'+
  '<a href="/#!/phones/{{phone.id}}" class="thumb">'+
  '<img ng-src="{{phone.imageUrl}}" alt="{{phone.name}}" />'+
  '</a>'+
  '<a href="/#!/phones/{{phone.id}}">{{phone.name}}</a>'+
  '<p>{{phone.snippet}}</p>'+
  '</li>'+
  '</ul>',
    controller: 
      function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';

        $http.get('/#!/phones.json').then(function(response) {
          self.phones = response.data.slice(0,5);
        });
    }
  });