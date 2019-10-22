<?php


class loginController extends login
{
    public function usersLogin() {
        if (isset($_POST['inpEmail']) && isset($_POST['inpPass'])) {
            $mailUser = trim($_POST['inpEmail']);
            $passUser = trim($_POST['inpPass']);

            foreach (parent::loginUsers($mailUser) as $user) {}
            if (isset($user) && !empty($user)) {
                if ($mailUser == $user->user_mail && $passUser == $user->user_password) {
                    security::datesAdmin($user->user_name, $user->user_mail);
                    header('location:?c=index&m=admin');
                } else {
                    header('location:?c=index&m=index&ucfail=true');
                }
            } else {
                header('location:?c=index&m=index&untfail=true');
            }
        } else {
            echo 'Algo salio mal !';
        }
    }

    public function destroySession() {
        session_destroy();

        return '?c=index&m=index&untfail=true';
    }
}