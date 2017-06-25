<?php
namespace Home\Controller;

use Think\Controller;

class IndexController extends Controller
{
    public function Index()
    {
        $this->display();
    }

    /**
     * [getBlogList 获取博客列表]
     * @return [type] [description]
     */
    public function getBlogList()
    {
        $pageData = $_POST;
        $art = M('article');
        $count =$art->count();
        $rets = $art->order('create_time desc')
            ->limit(($pageData[pageIndex]-1) * $pageData[pageSize],$pageData[pageSize])
            ->select();
        return PageContent($rets,$count);
    }
}
