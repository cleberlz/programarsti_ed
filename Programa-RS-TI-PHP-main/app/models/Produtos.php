<?php

class Produtos {

    public $nome;
    public $categoria;
    public $cor;
    public $preco;
    public $descricao;
    public $fotos;

    public function getProdutos($idProduto = null) {
        if (isset($idProduto)) {
            // Se o $idProduto estiver definido (ou seja, diferente de nulo),
            // Retorna apenas UM produto específico do banco de dados.
            $sqlQuery = "SELECT 
                            produtos.*,       
                            categorias.id AS id_categoria
                        FROM 
                            produtos
                        INNER JOIN 
                            produtos_has_categorias ON produtos.id = produtos_has_categorias.id_produtos
                        INNER JOIN 
                            categorias ON produtos_has_categorias.id_categorias = categorias.id
                        WHERE 
                            produtos.id = ?";
            $arrQueryParametros = [$idProduto];
        } else {
            // Se o $idProduto NÃO estiver definido (ou seja, igual a nulo),
            // Retorna todos os produtos do banco de dados.
            $sqlQuery = "SELECT 
                            produtos.*,       
                            categorias.id AS id_categoria
                        FROM 
                            produtos
                        INNER JOIN 
                            produtos_has_categorias ON produtos.id = produtos_has_categorias.id_produtos
                        INNER JOIN 
                            categorias ON produtos_has_categorias.id_categorias = categorias.id";
            $arrQueryParametros = [];
        }

        try {
            return Database::query($sqlQuery, $arrQueryParametros);
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function addProduto() {
        $sqlQuery = "INSERT INTO produtos (nome, cor, preco, descricao, fotos)
                        VALUES (?, ?, ?, ?, ?)";

        try {
            // Uma inserção bem-sucedida no banco de dados retorna o ID do produto adicionado
            $idProdutoAdicionado = Database::query($sqlQuery, [
                                                $this->nome, 
                                                $this->cor, 
                                                $this->preco, 
                                                $this->descricao, 
                                                $this->fotos ?? ''
                                            ]); 
                                            // ?? adiciona a foto ou nada ('') se não foram 
                                            // carregadas fotos no formulário
            
            // Se o produto foi adicionado com sucesso ao banco de dados
            if($idProdutoAdicionado) {
                $sqlQuery = "INSERT INTO produtos_has_categorias(id_produtos, id_categorias) 
                                VALUES (?, ?)";
                
                try {
                    Database::query($sqlQuery, [$idProdutoAdicionado, $this->categoria]);
                    return $idProdutoAdicionado;
                } catch (\PDOException $e) {
                    exit($e->getMessage());
                }
            }
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }
}