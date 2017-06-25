/**
 * Created by yangyu on 2017/6/15.
 *
 */


layui.define(['laypage', 'layer', 'form', 'pagesize'], function (exports) {
    debugger;
    var form = layui.form()
        ,layer = layui.layer
        ,laypage = layui.laypage;
    var $ = layui.jquery;
    var doc = document;
    var laypageId = 'pageNav';
    tableInit(1,4);
    function tableInit(currentIndex, pageSize) {
        var index = layer.load(1);
        //数据
        var data=null;
        var pageData ={
            pageIndex:currentIndex,
            pageSize:pageSize
        };
        var pages=null;
        $.post('Index.php?c=Index&a=getBlogList',pageData,function(result){
            pages = Math.ceil(result.count / pageData.pageSize);
            data = result;
            //模拟数据加载
            setTimeout(function () {
                layer.close(index);
                //计算总页数（一般由后台返回）
                var html = '';

                //遍历文章集合
                for (var i = 0; i < data.rows.length; i++) {
                    html +='<img src="" alt=""><div class="mod_top_body_text_context">' +
                        '<div class="text_context_l"><a class="text_btn">' +
                        '<span class="glyphicon glyphicon-edit"></span></a>' +
                        '</div><div class="text_context_r">' +
                        '<h3 id="Detail">【WEB】 前端技术分享前端技术分享前端前端技术分享前端技术分享前端技术分享前端技术  </h3>' +
                        '<div class="mod_context_r_div">' +
                        '<a href="home/BlogDetail/blogDetail" _bank="">' +
                        '<span class="glyphicon glyphicon-calendar"></span> ' +
                        '<span>June 3 2017</span></a> <a href="">' +
                        '<span class="glyphicon glyphicon-calendar"></span>' +
                        '<span>June 3 2017</span></a> <a href="">' +
                        '<span class="glyphicon glyphicon-calendar"></span>' +
                        '<span>June 3 2017</span></a> <a href="">' +
                        '<span class="glyphicon glyphicon-heart preimg"></span> ' +
                        '<span class="pernum">18</span></a></div></div>' +
                        '<p class="mod_top_body_text_p">微信事业群术运营理论，语欢迎！</p>' +
                        '<div class="mod_top_body_bottom">' +
                        '<a class="type_lable">#IT博客</a> <a class="type_lable">#IT个人博客</a> ' +
                        '<a class="type_begin" href="#">继续阅读>></a></div></div>';
                }

                html += '<div id="' + laypageId + '"></div>';
                $('#home_content').html(html);

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

                layui.pagesize(laypageId, pageSize).callback(function (newPageSize) {
                    tableInit(1, newPageSize);
                });
            }, 500);
        },"JSON");
    }
});