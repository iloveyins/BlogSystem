var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogDetailArticleModal = (function() {
            function BlogDetailArticleModal() {
                var self = this;
            }

            BlogDetailArticleModal.prototype.render = function() {
                var self = this;
                self._getArticle();
            }

            BlogDetailArticleModal.prototype._getArticle = function() {
                var self = this;
                self._api().getArticleById({
                    id: 8
                }).then(function(rawData) {
                    if (rawData) {
                        var content = rawData.content;
                        $('.blog_body').html(content);
                        $('table').addClass('table table-bordered table-striped table-hover');
                        // var height = $('.mod_top_body').height();
                        // $('.mod').height(height);
                        self._initHeighLight();
                    }
                });
            }

            BlogDetailArticleModal.prototype._initHeighLight = function() {
                var self = this;
                hljs.initHighlighting();
                hljs.initLineNumbersOnLoad();
            }

            BlogDetailArticleModal.prototype._api = function() {
                var self = this;
                return {
                    /**
                     * [获取文章详情]
                     * @param  {Object} query [{id:string}]
                     * @return {Deferred}       [description]
                     */
                    getArticleById: function(query) {
                        return Flash.get('/Home/BlogEdit/getArticleById', query);
                    }
                };
            }
            return BlogDetailArticleModal;
        }());
        Home.BlogDetailArticleModal = BlogDetailArticleModal;
    }(Home = Flash.Home || (Flash.Home = {})));
}(Flash || (Flash = {})));
