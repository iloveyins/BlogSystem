/*
* @Author: yangyu
* @Date:   2017-04-17 22:32:22
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-19 20:02:27
*/

'use strict';
//弹出层封装
var dialog = {
    //错误弹出层
    error: function (message) {
        layer.open({
            content: message,
            icon: 2,
            title: '错误提示',
        });
    },
    //成功
    success: function (message, url) {
        layer.open({
            title: '提示',
            content: message,
            yes: function () {
                parent.location.href = url
            },
            icon: 1,
            zIndex: layer.zIndex //重点1
        });
    },
    //确认/取消
    confirm: function (message, url) {
        layer.confirm(message, {
            btn: ['确认', '取消'] //按钮
        }, function () {
            layer.closeAll('dialog'); //关闭信息框
        }, function () {
            parent.location.href=url;
        });
    },
    //继续添加/关闭
    confirmToAdd: function (message, url) {
        layer.confirm(message, {
            btn: ['继续添加', '关闭'] //按钮
            ,icon:1
        }, function () {
            layer.closeAll('dialog'); //关闭信息框
        }, function () {
            parent.location.href=url;
        });
    },
}
