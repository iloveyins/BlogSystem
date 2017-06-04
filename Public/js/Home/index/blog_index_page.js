'use strict';
var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogIndexPage = (function() {
            function BlogIndexPage() {
                var self = this;
                self.blogIndexArticleListModal=new Flash.Home.BlogIndexArticleListModal();
                self.blogIndexRecommArticleModal=new Flash.Home.BlogIndexRecommArticleModal();
                self.blogIndexTopArticleModal=new Flash.Home.BlogIndexTopArticleModal();
            }

            BlogIndexPage.prototype.render = function() {
                var self = this;
                self.blogIndexArticleListModal.render();
                self.blogIndexRecommArticleModal.render();
                self.blogIndexTopArticleModal.render();
            }

            return BlogIndexPage;
        }());
        Home.BlogIndexPage = BlogIndexPage;
    }(Home = Flash.Home || (Flash.Home = {})));
}(Flash || (Flash = {})));
(new Flash.Home.BlogIndexPage()).render();
