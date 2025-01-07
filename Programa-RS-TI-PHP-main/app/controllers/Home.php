<?php

require_once('Produto.php');

class Home extends Controller {

    // Index of the home page (localhost/home(/index))
    public function index() {
        $produtoController = new Produto();

        $this->view('home/index', ['produtos' => $produtoController->listaProdutos()]);
    }
}