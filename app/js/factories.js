newsSummaryApp.factory('ArticleFactory', function() {

  NewsItem = function(headline){
    this.headline = headline;
  };

  return NewsItem;

});
