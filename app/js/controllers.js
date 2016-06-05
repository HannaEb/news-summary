newsSummaryApp.controller("NewsSummaryController", ['ArticleFactory', 'ArticleService', function(ArticleFactory, ArticleService) {
    var self = this;

    self.articles = ArticleService.getAll();

  }]);
