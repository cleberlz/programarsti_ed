<?php

Class API extends Controller {
    // Exemplo de URL de chamada no nosso JavaScript
    // Retorna todas as cidades do estado do RS:
    // /public/index.php?url=API/JSON/Cidades/getCidades/23

    // API => Controller
    // JSON => Método
    // Cidades => Parâmetro 1
    // getCidades => Parâmetro 2
    // 23 => Parâmetro 3 ($id_uf)

    protected $controller = 'Home';
    protected $method = 'index';
    protected $params = [];

    public function JSON($controller, $method, ...$params) {
        // die(var_dump($controller, $method, $params));
        $this->controller = $controller;
        $this->method = $method;
        $this->params = $params;

        // Cria uma nova instância da Controller
        require $controller . ".php";
        $this->controller = new $controller;

        echo json_encode(call_user_func_array([$this->controller, $this->method], $this->params));
    }
}