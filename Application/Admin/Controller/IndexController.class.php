<?php
/**
 * @Author: yangyu
 * @Date:   2017-04-22 10:49:30
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-04-22 10:50:44
 */

namespace Admin\Controller;
use  Think\Controller;
/**
* 后台主页控制器
*/
class IndexController extends Controller
{
    function Index(){
        $this ->display();
    }
    //打开主页
    function Main(){
        $this->display();
    }
    //文章管理
    function  Article(){
        $this->display();
    }
}
