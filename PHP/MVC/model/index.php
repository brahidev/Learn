<?php


class index extends database
{
    public function insertUser(array $array) {
        try {
            $stm = parent::conexion()->prepare(preparedSQL::insertUser);
            $stm->bindParam(1, $array['userName'], PDO::PARAM_STR);
            $stm->bindParam(2, $array['userMail'], PDO::PARAM_STR);
            $stm->bindParam(3, $array['userPass'], PDO::PARAM_STR);
            $stm->execute();
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }
}