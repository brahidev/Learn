<?php

class security
{
    public static function datesAdmin($name, $mail){
        $_SESSION['NAME'] = $name;
        $_SESSION['MAIL'] = $mail;
    }

    public static function validateSession() {
        if (!$_SESSION['NAME']) {
            header('location:?c=index&m=error');
        }
    }
}