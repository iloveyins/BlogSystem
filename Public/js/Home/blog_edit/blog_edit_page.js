var Flash;
(function(Flash) {
    var Home;
    (function(Home) {
        var BlogEditPage = (function() {
            function BlogEditPage() {

            }

            BlogEditPage.prototype.submit = function() {
                var self = this;
                let content = $('#editor').val() || '';
                let postData = {
                    content: content
                };
                self._api().saveArticle(postData).then(function(rawData) {

                });
            };

            BlogEditPage.prototype.render = function() {
                var self = this;
                var options = {
                    textarea: $('#editor'),
                    placeholder: '',
                    defaultImage: '/Public/images/simditor.png',
                    params: {},
                    upload: true,
                    tabIndent: true,
                    toolbar: true,
                    toolbarFloat: true,
                    toolbarFloatOffset: 0,
                    toolbarHidden: false,
                    pasteImage: false,
                    cleanPaste: false,
                    autosavePath: '/Home/BlogEdit/saveArticle'
                };
                var editor = new Simditor(options);
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
