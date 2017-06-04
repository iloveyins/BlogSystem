'use strict';
var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogIndexPage = (function() {
            function BlogIndexPage() {
                var self = this;
            }

            BlogIndexPage.prototype.render = function() {
                var self = this;
                self.getBlogList();
            }

            BlogIndexPage.prototype.getBlogList = function() {
                var self = this;
                var query = {};
                self._api().getBlogList(query).then(function(rawData) {

                });
            }

            BlogIndexPage.prototype._api = function() {
                var self = this;
                return {
                    getBlogList: function(query) {
                        return Flash.get('', query);
                    }
                };
            }

            return BlogIndexPage;
        }());
        Home.BlogIndexPage = BlogIndexPage;
    }(Home = Flash.Home || (Flash.Home = {})));
}(Flash || (Flash = {})));
(new Flash.Home.BlogIndexPage()).render();
