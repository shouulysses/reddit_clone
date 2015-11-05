app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts',

    // Main scope (used in views)
    function($scope, $stateParams, posts){
        $scope.posts = [{
      title: 'post 1',
      link: 'http://hk.yahoo.com',
      upvotes: 5,
      comments: [{
        author: 'abc',
        body: 'Come on',
        upvotes: 0
      }]
    }, {
      title: 'post 2',
      upvotes: 2
    }, {
      title: 'post 3',
      upvotes: 15
    }, {
      title: 'post 4',
      upvotes: 9
    }, {
      title: 'post 5',
      upvotes: 4
    }];
    }

]);