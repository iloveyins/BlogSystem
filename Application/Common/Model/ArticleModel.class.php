<?php
/**
 * Created by PhpStorm.
 * User: Trasen
 * Date: 2017/5/22
 * Time: 13:07
 */

namespace Common\Model;
use Think\Model;

class ArticleModel extends Model{
    private $_db = '';
    public function __construct()
    {
        $this->_db = M('article');
    }
    //获取文章信息
    public function getArticleList(){
        $ret = $this->_db->select();
        return $ret;
    }
    //获取文章信息
    public function getArticle($Id){
        $ret = $this->_db->where('id='.$Id)->select();
        return $ret;
    }
    //添加文章
    public function insertAricle($data=array()){
        if(!$data || !is_array($data)){
            return 0;
        }
        $users = session("blogadminUser");
        $data['author']=$users['user_name'];
        $data['create_time']= date('Y-m-d H:i:s',time());
        $data['acc_num']=0;
        $data['auth']="";
        $data['browse_num']=0;
        $data['acce_id']=0;
        return $this->_db->add($data);
    }

    //更新文章信息
    public function updateArticle($data){
        $users = session("blogadminUser");
        $id = $data[id];
        array_shift($data);
        return $this->_db->where("id=".$id)->setField($data);
    }
    public function deleteArticle($Id){
        return $this->_db->where('id='.$Id)->delete();
    }
}