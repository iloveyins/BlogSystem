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
                var options = {
                    title: "你好",
                    text: "你吃饭了吗?世界你好",
                    hrefInfos: [{
                        href: "http://www.baidu.com",
                        text: "世界你好"
                    }, {
                        href: "http://www.163.com",
                        text: "你吃饭了吗"
                    }]
                }
                Flash.showSuccesseInfo(options);
                // if (self.articleId) {
                //     self._api().updateArticleById(postData).then(function(rawData) {
                //         self.saveSuccessed.notify();
                //     });
                // } else {
                //     self._api().saveArticle(postData).then(function(rawData) {
                //         self.articleId = rawData.articleId;
                //         self.saveSuccessed.notify();
                //     });
                // }
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
var BlogEditPage = new Flash.Home.BlogEditPage();
BlogEditPage.render();
