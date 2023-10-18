app.directive('time', function(dateFilter) {
    return{
        restrict: 'E',
        template:'{{time}}',
        scope:{},
        link:function(scope, element, attrs) {
            scope.time=dateFilter(new Date(),'hh:mm:ss');
        }
    }
})



    
    
    
    
    
    
    







