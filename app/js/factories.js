newsSummaryApp.factory('ArticleFactory', function() {

  NewsItem = function(headline, thumbnail){
    this.headline = headline;
    this.thumbnail = thumbnail
  };

  return NewsItem;

});
