var app=angular.module('videotuto',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'partials/index.html',controller:'PostsCtrl'})
    .when('comments/:id',{templateUrl:'partials/comments.html',controller:'CommentsCtrl'})
    .otherwise({ redirectTo:'/'})
});
app.factory('Post', function($q, $timeout, $http){
    var factory ={
posts :false,
    getPosts : function() {
    var deferred = $q.defer();
    if(factory.posts !==false) {
    deferred.resolve(factory.posts)
    }else{
        $http.get('posts.json')
        .success(function(data,status){
            factory.posts = data;
            $timeout(function(){
            deferred.resolve(factory.posts);
        },2000)})
        .error(function(data,status){
            deferred.reject("imposssible de récupérer les articles");  
        });
    }
    },
getPost: function(id) {
    var deferred = $q.defer();
    var post ={};
    var posts =factory.getPosts().then(function(posts){
        angular.forEach(posts, function(value,key){
            if(value.id==id) {
                value=post;
            }
}); })
},
add: function(comment) {
    var deferred = $q.defer();
    deferred.resolve();
    return deferred.promise;
}}
    return factory;
})
