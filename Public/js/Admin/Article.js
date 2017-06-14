/*
* @Author: yangyu
* @Date:   2017-04-26 21:03:46
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-26 21:08:45
*/

layui.define(['element', 'layer', 'form'], function (exports) {
    var form = layui.form()
        ,layer = layui.layer;

    var $ = layui.jquery;
    //添加数据
    $('#addArticle').click(function () {
        layer.open({
            type:2,
            title:"添加文章信息",
            area:['1000px','800px'],
            maxmin:true,
            content:"Admin.php?c=Article&a=addArticle"
        });
    });
    $("#typeArtict").html();
    //绑定文章类型
    var url ="Admin.php?c=Type&a=getTypeList";
    $.get(url,{},function (result) {
        if (result.status == 0){
            console.log(result);
            var str ="";
            for(var i = 0; i<result.data.length;i++){
                str +="<option value='"+result.data[i].id+"'>"+result.data[i].type_name+"</option>";
            }
            debugger;
            $("#atricleType").append(str);
        }
        else if(result.status ==1)
        {
            dialog.error(result.message);
        }
    },"JSON");
    exports();
});