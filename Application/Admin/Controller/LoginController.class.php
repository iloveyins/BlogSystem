<?php
/**
 * @Author: YangYu
 * @Date:   2017-04-20 21:49:32
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-05-15 11:45:08
 */

/**
* 后台登陆控制器
*/
namespace Admin\Controller;
use  Think\Controller;

class LoginController extends Controller
{
    function Index(){
         if(session('blogadminUser')){
            //$this->redirect('Admin.php?c=Index');
             echo "<script> parent.location.href='Admin.php?c=Index'</script>";
         }else
         {
             $this->display();
         }
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

        if($ret['password'] != getMd5Password($pwd)){
            return show(0,'密码错误');
        }

        session('blogadminUser',$ret);
        return show(1,"登录成功");
    }

    function outLogin(){
        session('blogadminUser',null);
        echo "<script> parent.location.href='Admin.php'</script>";
    }
}