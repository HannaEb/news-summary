newsSummaryApp.service('ArticleService', ['$http', 'ArticleFactory', function($http, ArticleFactory) {

  var self = this;

  self.getAll = function() {
    var articles = [];
    _fetchArticlesFromApi(articles);
    return articles;
  };

  function _fetchArticlesFromApi(articles) {
    $http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail,headline,trailText')
      .then(function(response) {
        _handleResponseFromApi(response.data, articles);
      }, function(err) {});
  }

  function _handleResponseFromApi(data, articles) {
    data.response.results.forEach(function(result) {
      articles.push(new ArticleFactory(result.fields.headline));
    });
  }
}]);
