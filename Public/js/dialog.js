/*
* @Author: yangyu
* @Date:   2017-04-17 22:32:22
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-19 20:02:27
*/

'use strict';
//弹出层封装
var dialog ={
    //错误弹出层
    error:function(message){
        layer.open({
            content:message,
            icon:2,
            title:'错误提示',
        });
    },
    //成功
    success:function(message,url){
        layer.open()({
            content:message,
            icon:1,
            yes:function(){
                location.href = url;
            },
        });
    },
    //确认/取消
    confirm:function(message,url){
        layer.confirm(message, {
              btn: ['确认','取消'] //按钮
            }, function(){
              layer.msg(message, {icon: 1});
            }, function(){

        });
    }
}
