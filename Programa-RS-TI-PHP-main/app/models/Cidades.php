<?php

class Cidades {
    public $id;
    public $uf;

    public function getCidades() {
        $sqlQuery = "SELECT id,nome FROM cidade WHERE uf = ?";

        try {
            return Database::query($sqlQuery, [$this->uf]);
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }
}