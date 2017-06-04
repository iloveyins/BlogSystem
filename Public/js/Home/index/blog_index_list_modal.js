var Flash;
(function (Flash) {
    var Home;
    (function (Home) {
        var BlogIndexArticleListModal= (function () {
            function BlogIndexArticleListModal() {

            }

            BlogIndexArticleListModal.prototype.render=function () {
                var self=this;
                $('#Detail').on('click', function(event) {
                    Flash.openPage('');
                });
                self.getBlogList();
            }

            BlogIndexArticleListModal.prototype.getBlogList = function() {
                var self = this;
                var query = {};
                self._api().getBlogList(query).then(function(rawData) {

                });
            }

            BlogIndexArticleListModal.prototype._api = function() {
                var self = this;
                return {
                    /**
                     * [description]
                     * @param  {Object} query [参数]
                     * @return {Deferred}       [description]
                     */
                    getBlogList: function(query) {
                        return Flash.get('', query);
                    }
                };
            }

            return BlogIndexArticleListModal;
        }());
        Home.BlogIndexArticleListModal=BlogIndexArticleListModal;
    }(Home = Flash.Home||(Flash.Home={})));
}(Flash||(Flash={})));
