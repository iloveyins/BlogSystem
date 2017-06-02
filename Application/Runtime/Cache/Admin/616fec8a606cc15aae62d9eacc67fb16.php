<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>添加文章</title>
    <link rel="stylesheet" href="/Public/plugin/layui/css/layui.css">
</head>
<body>
<div class="" style="padding: 20px;">
    <form class="layui-form" id="addArticleForm" style="margin-top: 20px;" >
        <div class="layui-form-item">
            <label class="layui-form-label">文章名称</label>
            <div class="layui-input-block">
                <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">文章类型</label>
            <div class="layui-input-block">
                <input type="text" name="type_name" lay-verify="type_name" autocomplete="off" placeholder="请输入标题" class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">文章地址</label>
            <div class="layui-input-block">
                <input type="text" name="article_url" lay-verify="article_url" autocomplete="off" placeholder="请输入标题" class="layui-input">
            </div>
        </div>
        <label class="layui-form-label">文章内容</label>
        <div class="layui-input-block">
            <textarea class="layui-textarea layui-hide" name="content" lay-verify="content" id="LAY_demo_editor"></textarea>
        </div>
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit="" lay-filter="addArticle">确认添加</button>
                <button type="reset" class="layui-btn layui-btn-primary" id="addreset">重置</button>
            </div>
        </div>
    </form>
</div>
    <script src="/Public/js/jquery.min.js"></script>
    <!-- layui.js -->
    <script src="/Public/plugin/layui/layui.js"></script>
    <script src="/Public/js/dialog.js"></script>
    <script>
        layui.use(['form', 'layedit', 'laydate'], function(){
        var form = layui.form()
            ,layer = layui.layer
            ,layedit = layui.layedit
            ,laydate = layui.laydate;

        //创建一个编辑器
        var editIndex = layedit.build('LAY_demo_editor');
        //自定义验证规则
        form.verify({
            title: function(value){
                if(value.length < 5){
                    return '标题至少得5个字符啊';
                }
            }
            ,pass: [/(.+){6,12}$/, '密码必须6到12位']
            ,content: function(value){
                layedit.sync(editIndex);
            }
        });

        //监听指定开关
        form.on('switch(switchTest)', function(data){
            layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
                offset: '6px'
            });
            layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
        });

        //监听提交
        form.on('submit(addArticle)', function(data){
//            layer.alert(JSON.stringify(data.field), {
//                title: '最终的提交信息'
//            })
            var index = layer.load(1);
            debugger;
            var url = "Admin.php?c=Article&a=InsertArticle";
            var data =$("#addArticleForm").serializeArray();
            debugger;
            var postData ={};
            $(data).each(function(){
                postData[this.name] = this.value;
            });
            $.post(url,postData,function(result){
                layer.close(index);
                if(result.status == 1){
                    dialog.confirmToAdd(result.message,'Admin.php?c=Article');
                }
                if(result.status == 0){
                    dialog.error(result.message);
                }
            },"JSON");
            return false;
        });
    });
    </script>
</body>
</html>