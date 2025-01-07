<?php

Class Cidade extends Controller {
    public function getCidades($id_uf) {
        $cidades = $this->model("Cidades");
        $cidades->uf = $id_uf;

        $cidadesData = $cidades->getCidades();

        return $cidadesData;
    }
}