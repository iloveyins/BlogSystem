/*
* @Author: yangyu
* @Date:   2017-04-26 21:03:46
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-26 21:08:45
*/

layui.define(['laypage','element', 'layer', 'form','pagesize'], function (exports) {
    var form = layui.form()
        ,layer = layui.layer
        ,laypage = layui.laypage;
    var $ = layui.jquery;
    var doc = document;
    var laypageId = 'pageNav';
    tableInit(1,10);
    //初始化
    function init() {
        //绑定文章类型
        var url ="Admin.php?c=Type&a=getTypeList";
        $.get(url,{},function (result) {
            if (result.status == 0){
                form.render('select');
                for(var i = 0; i<result.data.length;i++){
                    $("#atricleType").append("<option value='"+result.data[i].id+"'>"+result.data[i].type_name+"</option>");
                }
                form.render();
            }
            else if(result.status == 1)
            {
                dialog.error(result.message);
            }
        },"JSON");
        
        
    }
    //页数表格据初始化
    //currentIndex：当前也下标
    //pageSize：页容量（每页显示的条数）
    function tableInit(currentIndex, pageSize) {
        var index = layer.load(1);
        //数据
        var data=null;
        var pageData ={
            pageIndex:currentIndex,
            pageSize:pageSize
        };
        var pages=null;
        $.post('Admin.php?c=Article&a=SearchArticle',pageData,function(result){
            pages = Math.ceil(result.count / pageData.pageSize);
            data = result;
            //模拟数据加载
            setTimeout(function () {
                layer.close(index);
                //计算总页数（一般由后台返回）
                var html = '';
                html += '<table style="" class="layui-table" lay-even>';
                html += '<colgroup><col width="180"><col><col width="80"><col width="180"><col width="180"><col width="190"><col width="190"><col width="50"><col width="50"></colgroup>';
                html += '<thead><tr><th>发表时间</th><th>标题</th><th>作者</th><th>类别</th><th>插件下载量</th><th>浏览量</th><th>地址</th><th colspan="2">选项</th><th colspan="2">操作</th></tr></thead>';
                html += '<tbody>';
                //遍历文章集合
                for (var i = 0; i < data.rows.length; i++) {
                    var item = data.rows[i];
                    html += "<tr>";
                    html += "<td>" + item.create_time + "</td>";
                    html += "<td>" + item.title + '[' + item.id + ']' + "</td>";
                    html += "<td class='layui-elip'>" + item.author + "</td>";
                    html += "<td>" + item.type_name + "</td>";
                    html += "<td class='layui-elip'>" + item.accn_num + "</td>";
                    html += "<td>" + item.browse_num + "</td>";
                    html += "<td class='layui-elip'>" + item.article_url + "</td>";
                    html += '<td><form class="layui-form" action=""><div class="layui-form-item" style="margin:0;"><input type="checkbox" name="top" title="置顶" value="' + item.id + '" lay-filter="top" checked /></div></form></td>';
                    html += '<td><form class="layui-form" action=""><div class="layui-form-item" style="margin:0;"><input type="checkbox" name="top" title="推荐" value="' + item.id + '" lay-filter="recommend" checked /></div></form></td>';
                    html += '<td><button class="layui-btn layui-btn-small layui-btn-normal" onclick="layui.datalist.editData(\'' + item.id + '\')"><i class="layui-icon">&#xe642;</i></button></td>';
                    html += '<td><button class="layui-btn layui-btn-small layui-btn-danger" onclick="layui.datalist.deleteData(\'' + item.id + '\')"><i class="layui-icon">&#xe640;</i></button></td>';
                    html += "</tr>";
                }
                html += '</tbody>';
                html += '</table>';
                html += '<div id="' + laypageId + '"></div>';
                $('#dataContent').html(html);

                form.render('checkbox');  //重新渲染CheckBox，编辑和添加的时候
                $('#dataConsole,#dataList')
                    .attr('style', 'display:block'); //显示FiledBox

                laypage({
                    cont: laypageId,
                    pages: pages,
                    groups: 8,
                    skip: true,
                    curr: currentIndex,
                    jump: function (obj, first) {
                        var currentIndex = obj.curr;
                        if (!first) {
                            tableInit(currentIndex, pageSize);
                        }
                    }
                });
                //该模块是我定义的拓展laypage，增加设置页容量功能
                //laypageId:laypage对象的id同laypage({})里面的cont属性
                //pagesize当前页容量，用于显示当前页容量
                //callback用于设置pagesize确定按钮点击时的回掉函数，返回新的页容量
                layui.pagesize(laypageId, pageSize).callback(function (newPageSize) {
                    //这里不能传当前页，因为改变页容量后，当前页很可能没有数据
                    tableInit(1, newPageSize);
                });
            }, 500);
        },"JSON");
    }

    //输出接口，【删除、编辑、添加】
    var datalist= {
        //添加文章信息
        addData:function (id) {
          var width = doc.body.clientWidth,
              height = doc.body.clientHeight;
            layer.open({
                type:2,
                title:"添加文章信息",
                area:[(width-400)+'px',(height-400)+'px'],
                maxmin:true,
                content:"Admin.php?c=Article&a=addArticle"
            });
        },
        deleteData: function (id) {
            layer.confirm('确定删除？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                $.get('Admin.php?c=Article&a=DelArticle',{id:id},function (result) {
                    layer.msg(result.message);
                    setTimeout(function(){
                        window.location.href = 'Admin.php?c=Article';
                    },(300));
                },"JSON");
            }, function () {

            });
        },
        editData: function (id) {
            var data ;
            layer.open({
                type:2,
                title:"修改文章信息",
                area:['900px','500px'],
                maxmin:true,
                content:"Admin.php?c=Article&a=updateArticle&id="+encodeURI(id)
            });
        }
    };

    init();
    exports('datalist',datalist);
});