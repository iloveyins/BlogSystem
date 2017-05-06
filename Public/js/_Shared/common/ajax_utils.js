var Flash;
(function(Flash) {
    /**
     * [get description]
     * @method get
     * @param  {string} url   [description]
     * @param  {object} query [description]
     * @return {Promise}       [description]
     */
    function get(url, query) {
        return $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            data: query
        });
    }
    Flash.get = get;

    /**
     * [post description]
     * @method post
     * @param  {string} url    [description]
     * @param  {object} params [description]
     * @return {Promise}        [description]
     */
    function post(url, params) {
        return $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: params
        });
    }
    Flash.post = post;
}(Flash || (Flash = {})));
