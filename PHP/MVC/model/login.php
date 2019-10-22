<?php

class login extends database {

    public function loginUsers($data){
        try {
            $stm = parent::conexion()->prepare(preparedLoginSql::login);
            $stm->bindParam(1, $data, PDO::PARAM_STR);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }
}