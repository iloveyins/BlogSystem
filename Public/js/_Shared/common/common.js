var Flash;
(function(Flash) {
    function get(url, query) {
        return $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                data: query
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
    }
    Flash.get = get;

    function post(url, params) {
        return $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                data: params
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
    }
    Flash.post = post;
}(Flash || Flash = {}));
