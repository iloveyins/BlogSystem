<?php
/**
 * @Author: YangYu
 * @Date:   2017-04-20 21:49:32
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-04-22 10:56:58
 */

/**
* 后台登陆控制器
*/
namespace Admin\Controller;
use  Think\Controller;

class LoginController extends Controller
{
    function Index(){
         if(session('adminUser')){
             $this->redirect('/Admin.php?Index&a=Index');
         }
        $this->display();
    }

    //登录按钮
    function btnLogin(){
        $userName = $_POST['userName'];
        $pwd = $_POST['pwd'];

        if(!trim($userName)){
           return show(0,'用户名不能为空');
        }

        $ret = D('Admin')->getAdminByUserName($userName);
        if(!$ret){
            return show(0,'用户名不存在');
        }

        if($ret['pwd'] != getMd5Password($pwd)){
            return show(0,'密码错误');
        }

        session('adminUser',$ret);
        return show(1,"登录成功");
    }

    function outLogin(){
        session('adminUser',null);
        echo "<script> parent.location.href='Admin.php'</script>";
    }
}