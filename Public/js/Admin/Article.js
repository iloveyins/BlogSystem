/*
* @Author: yangyu
* @Date:   2017-04-26 21:03:46
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-26 21:08:45
*/

layui.define(['element', 'layer', 'form'], function (exports) {
    var form = layui.form();
    var $ = layui.jquery;
    //添加数据
    $('#addArticle').click(function () {
        var index = layer.load(1);
        setTimeout(function () {
            layer.close(index);
            layer.open({
                type:2,
                title:"添加文章信息",
                area:['900px','500px'],
                maxmin:true,
                content:"Admin.php?c=Article&a=addArticle"
            });
        }, 500);
    });

    exports();
});