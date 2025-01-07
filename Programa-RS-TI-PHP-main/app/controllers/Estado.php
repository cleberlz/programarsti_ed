<?php
class Estado extends Controller {
    public function getEstados() {
        $estados = $this->model("Estados");

        $estadosData = $estados->getEstados();

        return $estadosData;
    }
}