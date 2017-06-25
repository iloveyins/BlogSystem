<?php
namespace Home\Controller;

use Think\Controller;

/**
 *
 */
class BlogEditController extends Controller
{
    private $_db = '';
    /**
     * [blogEdit description]
     * @return [type] [description]
     */
    public function blogEdit()
    {
        layout(false);
        $this->display();
    }

    /**
     * [saveArticle description]
     * @param  string $content [description]
     * @return [type]          [description]
     */
    public function saveArticle($data=array(), $content)
    {
        $this->_db = M('article');
        $content = $_POST['content'];
        // if (!$data || !is_array($data)) {
        //     return 0;
        // }
        $data['content']=$content;
        $data['title']='Test';
        $data['type_name']='Other';
        $data['article_url']='Other';
        $data['author']='Robot';
        $data['create_time']= date("Y-m-d H:i:s", time());
        $data['acc_num']=0;
        $data['auth']="";
        $data['browse_num']=0;
        $data['acce_id']=0;
        return $this->_db->add($data);
    }

    /**
     * [getArticleById description]
     * @param  string $id [description]
     * @return [type]     [description]
     */
    public function getArticleById($id)
    {
        $ArticleSelect =  M('article');
        $Article = $ArticleSelect->where("id={$id}")->select();
        $result = json_encode(current($Article));
        echo $result;
    }
}
