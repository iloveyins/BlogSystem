'use strict';
var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogDetailPage = (function() {
            function BlogDetailPage() {
                var self = this;
                self.blogDetailArticleModal = new Flash.Home.BlogDetailArticleModal();
            }

            BlogDetailPage.prototype.render = function() {
                var self = this;
                self.blogDetailArticleModal.render();
            }

            return BlogDetailPage;
        }());
        Home.BlogDetailPage = BlogDetailPage;
    }(Home = Flash.Home || (Flash.Home = {})));
}(Flash || (Flash = {})));
(new Flash.Home.BlogDetailPage()).render();
