<?php

class Usuarios {
    public function getUsuario($login, $senha) {
        // var_dump($login, $senha);
        
        // Retorna um resultado somente se o login e senha digitados pelo usuário 
        // corresponderem ao login e senha armazenados no banco de dados
        $sqlQuery = "SELECT * FROM usuarios WHERE login = ? AND senha = ?";

        try {
            return Database::query($sqlQuery, [$login, md5($senha)]);
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }
}