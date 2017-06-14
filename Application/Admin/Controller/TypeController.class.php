<?php
/**
 * Created by PhpStorm.
 * User: Trasen
 * Date: 2017/6/12
 * Time: 22:56
 */

namespace Admin\Controller;
use Think\Controller;

class TypeController extends CommonController{

    function getTypeList(){
        $ret = D("Type")->getTypeList();
        if($ret){
            return show(0,"OK",$ret);
        }
        else{
            return show(1,"查询失败!");
        }
    }
}