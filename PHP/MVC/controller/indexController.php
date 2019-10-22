<?php

// Index Controller

class indexController extends index
{
    public function index() {
        require_once ('view/all/head.php');
        require_once ('view/all/index.php');
        require_once ('view/all/footer.php');
    }

    public function admin() {
        security::validateSession();
        require_once ('view/all/head.php');
        require_once ('view/admin/admin.php');
        require_once ('view/all/footer.php');
    }

    public function error() {
        require_once ('view/all/head.php');
        require_once ('view/error/error.php');
        require_once ('view/all/footer.php');
    }

    public function insert() {
        $user_name = explode("=", $_REQUEST['userName']);
        $user_mail = explode("=", $_REQUEST['userMail']);
        $user_pass = explode("=", $_REQUEST['userPass']);
        $dates = array("userName" => $user_name[1], "userMail" => $user_mail[1], "userPass" => $user_pass[1]);

         parent::insertUser($dates);

        echo '?c=index&m=admin&success=true';
    }
}