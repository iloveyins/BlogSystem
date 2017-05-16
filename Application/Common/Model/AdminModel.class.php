<?php
/**
 * @Author: anchen
 * @Date:   2017-04-20 22:37:15
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-04-20 22:37:19
 */
namespace Common\Model;
use  Think\Model;

class AdminModel extends Model
{
    private $_db = '';
    public function __construct()
    {
        $this->_db = M('admin');
    }

    public function getAdminByUserName($userName){
        $ret = $this->_db->where('USER_NAME="'.$userName.'"')->find();
        return $ret;
    }
}