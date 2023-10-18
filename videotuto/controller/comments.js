app.controller('CommentsCtrl',function($scope,$routeParams,Post){
    $scope.NewComment={};
    Post.getPosts($routeParams.id).then(function(post){
        $scope.title=post.name;
        $scope.comments=post.comments;
    },function(message){
        alert(message);
    })
    $scope.addComment()=function(){
    $scope.comments.push($scope.NewComment);
    Post.add($scope.Newcomment).then(function() {},function() {
    alert("votre message n'a pu être sauvegardé");
    })
    $scope.NewComment={};
    }
});