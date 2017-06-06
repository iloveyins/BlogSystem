<?php
/**
 * @Author: yangyu
 * @Date:   2017-04-26 20:36:01
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-04-26 21:22:41
 */

/**
* 文章管理控制器
*/
namespace Admin\Controller;
use Think\Controller;
use Think\Page;

class ArticleController extends CommonController
{
    function Index(){
        $this->display();
    }

    function playArticle(){
        $pageData = $_POST;
        $art = M('article');
        import('ORG.Util.Page');
        $count =$art->count();
        $page =new Page($count,1);
        $show =$page->show();
        $rets = $art->order('create_Time')
            ->limit(($pageData[pageIndex]-1) * $pageData[pageSize],$pageData[pageSize])
            ->select();
        return PageContent($rets,$count);
    }

    //显示添加文章弹出框
    function addArticle(){
        $this->display();
    }

    //添加文章
    function InsertArticle(){
        if($_POST) {
//            if(!isset($_POST['title']) || !$_POST['title']){
//                return show(0,"文章标题不能为空");
//            }
//            if(!isset($_POST['article_url']) || !$_POST[article_url]){
//                return show(0,"地址不能为空");
//            }
//            if(!isset($_POST['type_name']) || !$_POST['type_name']){
//                return show(0,"文章类型不能为空");
//            }
//            if(!isset($_POST['content']) || !$_POST['content']){
//                return show(0,"文章内容不能为空");
//            }
//            if(!isset($_POST['author']) || !$_POST['author']){
//                return show(0,"发布人不能为空");
//            }


            $ret = D("Article")->insertAricle($_POST);
            if($ret){
                return show(1,"新增成功",$ret);
            }else{
                return show(0,"新增失败",$ret);
            }
        }else{
            return show(0,"参数错误");
        }
    }

    //删除文章
    function DelArticle(){
        $ret = D("Article")->deleteArticle($_GET[id]);
        if($ret>=1){
            return show(1,"删除成功");
        }else{
            return show(0,"删除失败");
        }
    }
}
