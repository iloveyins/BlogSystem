<?php
/**
 * @Author: anchen
 * @Date:   2017-04-20 22:20:47
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-04-20 22:40:45
 */

function show($status,$message,$data=array()){
    $return = array(
        'status' =>$status,
        'message' =>$message,
        'data'=>$data,
    );
    exit(json_encode($return));
}

function getMd5Password($pwd){
    return md5($pwd);
};