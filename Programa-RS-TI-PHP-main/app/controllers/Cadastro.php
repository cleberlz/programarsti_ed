<?php

class Cadastro extends Controller {

    // Index da página de cadastro (localhost/index.php?url=Cadastro(/index))
    public function index() {
        // Inicializa a model "Estados"
        $estados = $this->model('Estados');
        // Chama a função getEstados() e salva o resultado SQL
        // dessa função na variável "estadosData"
        $estadosData = $estados->getEstados();

        // Carrega a view "cadastro/index.php" e passa os Estados
        // a ela 
        $this->view('cadastro/index', ['estados' => $estadosData]);
    }

    // Cria uma nova pessoa no banco de dados.
    public function novoCadastro() {
        $pessoa = $this->model('Pessoas');
        $pessoa->cpf = $_POST['cpf'];
        $pessoa->nome = $_POST['nome'];
        $pessoa->sobrenome = $_POST['sobrenome'];
        $pessoa->data_nascimento = $_POST['data_nascimento'];
        $pessoa->sexo = $_POST['sexo'];
        $pessoa->telefone = $_POST['telefone'];
        $pessoa->email = $_POST['email'];
        $pessoa->cep = $_POST['cep'];
        $pessoa->rua = $_POST['rua'];
        $pessoa->numero = $_POST['numero'];
        $pessoa->bairro = $_POST['bairro'];
        $pessoa->complemento = $_POST['complemento'];
        $pessoa->estado = $_POST['estado'];
        $pessoa->cidade = $_POST['cidade'];

        $pessoa->inserirPessoa();
    }
}