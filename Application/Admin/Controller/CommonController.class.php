<?php
/**
 * @Author: anchen
 * @Date:   2017-04-26 20:00:43
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-04-26 20:25:46
 */
namespace Admin\Controller;
use Think\Controller;
/**
* use Common\Model 这个模块不需要使用，框架自动加载
*/
class CommonController extends Controller
{
    function __construct()
    {
        parent::__construct();
        $this->_init();
    }

    /**
     * [初始化]
     * @return
     */
    private function _init(){
        $isLogin = $this->isLogin();
        if(!$isLogin){
            //跳到登录页面
            $this->redirect('Admin.php?c=Login');
       }
    }

    /**
     * 获取登录用户信息
     * @return array
     */
    public function getLoginUser(){
        return session('AdminUser');
    }

    /**
     * 判定是否登录
     * @return boolean
     */
    public function isLogin(){
        $user = $this->getLoginUser();
        if($user && is_array($user)){
            return true;
        }
        return false;
    }
}