$(document).ready(function () {
    // Função para carregar cidades
    function carregarCidades(siglaEstado, idCidadeSelecionada = null) {
        $('select[name=cidade]').empty(); // Limpa o select de cidades
        $('select[name=cidade]').append(`<option value="" disabled selected>Selecione uma cidade</option>`); // Adiciona opção padrão

        $.ajax({
            url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaEstado}/municipios?orderBy=nome`,
            method: 'GET',
            dataType: 'json',
            success: function (cidades) {
                cidades.forEach(function (cidade) {
                    $('select[name=cidade]').append(`<option value="${cidade.id}">${cidade.nome}</option>`);
                });

                // Se um ID de cidade selecionada foi passado, selecione a opção correspondente
                if (idCidadeSelecionada) {
                    $('select[name=cidade]').val(idCidadeSelecionada);
                }
            },
            error: function () {
                alert('Erro ao consultar as cidades.');
            }
        });
    }



    $('input[name=cep]').mask('00000-000');
    $('input[name=numero]').mask('#');


    /*busca estados pelo ibge*/
    $.ajax({
        url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('select[name=uf]').empty(); // Limpa o select
            $('select[name=uf]').append(`<option value="" disabled selected>Selecione um estado</option>`);

            data.forEach(function (estado) {
                $('select[name=uf]').append(`<option value="${estado.sigla}">${estado.nome} - ${estado.sigla}</option>`);
            });
        },
        error: function () {
            alert('Erro ao consultar os estados.');
        }
    });

    $('select[name=uf]').on('change', function () {
        const siglaEstado = $(this).val();
        carregarCidades(siglaEstado);
    });


    /*$('input[name=numero]').on('keyup', function (event) {
        this.value = this.value.replace(/[^0-9]/g, ''); 
    });*/

    $('form').on('submit', function (event) {
        event.stopPropagation();
        event.preventDefault();
    });

    $('input[name=cep]').on('keyup', function (event) {
        let cep = $('input[name=cep]').val();

        cep = cep.replace('-', '');
        /* if (cep.length == 8) {
             $('input[name=cep]').removeClass('is-invalid');
         } else if (cep.length == 0) {
             $('input[name=cep]').removeClass('is-invalid');
         } else {
             $('input[name=cep]').addClass('is-invalid')
         }*/
        // alert(`CEP: https://viacep.com.br/ws/${cep}/json/`);

        if (cep.length == 8) {
            $.ajax('https://viacep.com.br/ws/' + cep + '/json/').done(function (data) {
                resposta = JSON.parse(data);
                if (resposta.erro) {
                    $('input[name=cep]').addClass('is-invalid');
                    return;
                }
                $('input[name=cep]').removeClass('is-invalid');

                $('input[name=cep]').val(resposta.cep);
                $('select[name=uf]').val(resposta.uf);
                $('input[name=rua]').val(resposta.logradouro);
                $('input[name=bairro]').val(resposta.bairro);
                carregarCidades(resposta.uf, resposta.ibge);
            });
        }
    });
});