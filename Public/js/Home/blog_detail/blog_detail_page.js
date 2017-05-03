var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogDetailPage = (function() {
            function BlogDetailPage() {
                var self = this;
            }

            BlogDetailPage.prototype.render = function() {
                var self = this;
                self.getBlogDetail();
            }

            BlogDetailPage.prototype.getBlogDetail = function() {
                var self = this;
                var query = {};
                self._api().getBlogDetail(query).then(function(rawData) {

                });
            }

            BlogDetailPage.prototype._api = function() {
                var self = this;
                return {
                    getBlogDetail: function(query) {
                        return Flash.get('', query);
                    }
                };
            }

            return BlogDetailPage;
        }());
        Home.BlogDetailPage = BlogDetailPage;
    }(Home = Flash.Home || (Flash.Home = {})));
}(Flash || (Flash = {})));
(new Flash.Home.BlogDetailPage()).render();
