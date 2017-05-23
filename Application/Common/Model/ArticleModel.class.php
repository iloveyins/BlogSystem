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
        $ret = $this->_db->find();
        return $ret;
    }
    //添加文章
    public function insertAricle($data=array()){
        if(!$data || !is_array($data)){
            return 0;
        }
        $data['ID'] =100001;
        $data['PUSH_TIME']=date("Y/m/d");
        $data['ACC_NUM']=0;
        $data['AUTH']="";
        $data['BROESE_NUM']=0;
        $data['ACCE_ID']=0;
        $sqls =  $this->_db->add($data);
        return "";
    }
    //更新文章信息
    public function updateArticle(){

    }
    //删除文章信息
    public function deleteArticle(){

    }
}