'use strict';
var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogIndexRecommArticleModal = (function() {
            function BlogIndexRecommArticleModal() {
                var self = this;
            }

            BlogIndexRecommArticleModal.prototype.render = function() {
                var self = this;
                self.getBlogList();
            }

            BlogIndexRecommArticleModal.prototype.getBlogList = function() {
                var self = this;
                var query = {};
                self._api().getBlogList(query).then(function(rawData) {

                });
            }

            BlogIndexRecommArticleModal.prototype._api = function() {
                var self = this;
                return {
                    getBlogList: function(query) {
                        return Flash.get('', query);
                    }
                };
            }

            return BlogIndexRecommArticleModal;
        }());
        Home.BlogIndexRecommArticleModal = BlogIndexRecommArticleModal;
        var RecommType;
        (function(RecommType) {
            RecommType[RecommType['ByTime'] = 0] = 'ByTime';
            RecommType[RecommType['ByHost'] = 1] = 'ByHost';
            RecommType[RecommType['ByDownload'] = 2] = 'ByDownload';
        }(RecommType = Home.RecommType || (Home.RecommType = {})));
    }(Home = Flash.Home || (Flash.Home = {})));
}(Flash || (Flash = {})));
(new Flash.Home.BlogIndexRecommArticleModal()).render();
