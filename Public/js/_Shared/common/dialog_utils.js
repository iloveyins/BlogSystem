'use strict';
var Flash;
(function(Flash) {
    function error(message) {
        layer.open({
            content: message,
            icon: 2,
            title: '错误提示',
        });
    }
    Flash.error = error;

    function success(message, url) {
        layer.open()({
            content: message,
            icon: 1,
            yes: function() {
                location.href = url;
            },
        });
    }
    Flash.success = success;

    function confirm() {
        layer.confirm(message, {
            btn: ['确认', '取消'] //按钮
        }, function() {
            layer.msg(message, {
                icon: 1
            });
        }, function() {

        });
    }
    Flash.confirm = confirm;

}(Flash || (Flash = {})));
