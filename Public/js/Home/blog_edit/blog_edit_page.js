var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogEditPage = (function() {
            function BlogEditPage() {
                var self = this;
                self.saveSuccessed = $.Deferred();
                self.articleId = null;
            }

            BlogEditPage.prototype.submit = function() {
                var self = this;
                let content = $('#editor').val() || '';
                let postData = {
                    content: content
                };
                if (self.articleId) {
                    self._api().updateArticleById(postData).then(function(rawData) {
                        self.saveSuccessed.notify();
                    });
                } else {
                    self._api().saveArticle(postData).then(function(rawData) {
                        self.articleId = rawData.articleId;
                        self.saveSuccessed.notify();
                    });
                }
            };

            BlogEditPage.prototype.render = function() {
                var self = this;
                self.saveSuccessed.progress(function() {

                });
                self.editor = Flash.SimditorUtils.setSimditor();
            };

            BlogEditPage.prototype._api = function() {
                return {
                    /**
                     * [description]
                     * @param  {[type]} query [description]
                     * @return {Deferred}       [description]
                     */
                    saveArticle: function(postData) {
                        return Flash.post('/Home/BlogEdit/saveArticle', postData);
                    },
                    /**
                     * [description]
                     * @param  {[type]} query [description]
                     * @return {[type]}       [description]
                     */
                    getArticleById: function(query) {
                        return Flash.get('/Home/BlogEdit/getArticleById', query);
                    },
                    /**
                     * [description]
                     * @param  {[type]} postData [description]
                     * @return {[type]}          [description]
                     */
                    updateArticleById: function(postData) {
                        return Flash.post('/Home/BlogEdit/updateArticleById');
                    }
                }
            };
            return BlogEditPage;
        }());
        Home.BlogEditPage = BlogEditPage;
    }(Home = Flash.Home || (Flash.Home = {})));
}(Flash || (Flash = {})));
(new Flash.Home.BlogEditPage()).render();
