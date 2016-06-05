newsSummaryApp.service('ArticleService', ['$http', 'ArticleFactory', function($http, ArticleFactory) {

  var self = this;

  self.getAll = function() {
    var headlines = [];
    _fetchHeadlinesFromApi(headlines);
    return headlines;
  };

  function _fetchHeadlinesFromApi(headlines) {
    $http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=headline,trailText')
      .then(function(response) {
        _handleResponseFromApi(response.data, headlines);
      }, function(err) {});
  }

  function _handleResponseFromApi(data, headlines) {
    data.response.results.forEach(function(result) {
      headlines.push(new ArticleFactory(result.fields.headline));
    });
  }
}]);
