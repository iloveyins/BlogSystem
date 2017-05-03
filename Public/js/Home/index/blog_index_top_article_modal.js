var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogIndexTopArticleModal = (function() {
            function BlogIndexTopArticleModal() {
                var self = this;
            }

            BlogIndexTopArticleModal.prototype.render = function() {
                var self = this;
                self.getBlogList();
            }

            BlogIndexTopArticleModal.prototype.getBlogList = function() {
                var self = this;
                var query = {};
                self._api().getBlogList(query).then(function(rawData) {

                });
            }

            BlogIndexTopArticleModal.prototype._api = function() {
                var self = this;
                return {
                    getBlogList: function(query) {
                        return Flash.get('', query);
                    }
                };
            }

            return BlogIndexTopArticleModal;
        }());
        Home.BlogIndexTopArticleModal = BlogIndexTopArticleModal;
    }(Home = Flash.Home || (Flash.Home = {})));
}(Flash || (Flash = {})));
