<?php

class Pessoas {
    public $cpf;
    public $nome;
    public $sobrenome;
    public $data_nascimento;
    public $sexo;
    public $telefone;
    public $email;
    public $cep;
    public $numero;
    public $bairro;
    public $cidade;
    public $rua;
    public $complemento;
    public $estado;

    // Obtém uma pessoa específica ou todas as pessoas
    // do banco de dados.
    public function getPessoa($sqlParameters = 1) {
        $sqlQuery = "SELECT * FROM pessoas";
            
        try {
            return Database::query($sqlQuery);
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    // Adiciona uma pessoa ao banco de dados.
    public function inserirPessoa() {
        $sqlQuery = "INSERT INTO `pessoas` \
                (`cpf`, `nome`, `sobrenome`, `data_nascimento`, `sexo`, `telefone`, `email`, \
                `cep`, `numero`, `bairro`, `cidade`, `rua`, `complemento`, `estado`) \
                VALUES \
                ('?', '?', '?', '?', '?', '?', '?', \
                '?', '?', '?', '?', '?', '?', '?');";

        try {
            return Database::query($sqlQuery,
                                [$this->cpf, $this->nome, $this->sobrenome, $this->data_nascimento, $this->sexo, $this->telefone, $this->email, 
                                        $this->cep, $this->numero, $this->bairro, $this->cidade, $this->rua, $this->complemento, $this->estado]);
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    // Exclui uma pessoa do banco de dados.
    public function excluirPessoa() {
        return true;
    }

    // Atualiza o cadastro de uma pessoa no banco de dados.
    public function editarPessoa() {
        return true;
    }

    
}

?>