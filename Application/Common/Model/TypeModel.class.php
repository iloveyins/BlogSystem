<?php
/**
 * Created by PhpStorm.
 * User: Trasen
 * Date: 2017/6/12
 * Time: 22:52
 */

namespace Common\Model;
use Think\Model;

class  TypeModel extends Model{
    private $_db = '';
    public function __construct()
    {
        $this->_db = M('type');
    }
    //获取类型
    public function getTypeList(){
        $ret = $this->_db->select();
        return $ret;
    }
}