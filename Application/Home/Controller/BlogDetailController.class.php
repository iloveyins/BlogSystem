<?php
namespace Home\Controller;

use Think\Controller;

class BlogDetailController extends Controller
{
    /**
     * [blogDetail description]
     * @return [type] [description]
     */
    public function blogDetail()
    {
        $this->display();
    }

    /**
     * [getArticleById description]
     * @param string $id [文章Id]
     * @return [type] [description]
     */
    public function getArticleById($id)
    {
        $ret = D("Article")->getArticleList($_POST);
        
        $result = json_encode($ret[5], true);
        echo $result;
        // return json_encode($ret);
    }
}
