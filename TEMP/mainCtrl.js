app.controller('MainCtrl', [
  '$scope', 'posts',
  function($scope, posts) {
    $scope.posts = posts.posts;
    $scope.test = 'Hello world!';
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
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [{
          author: 'Joe',
          body: 'Cool!',
          upvotes: 0
        }, {
          author: 'Bob',
          body: 'Soso',
          upvotes: 0
        }]
      });
    }
    $scope.title = '';
    $scope.link = '';
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }
]);