$(document).ready(function () {
    // Função para carregar cidades
    $('input[name=cep]').mask('00000-000');
    $('input[name=numero]').mask('#');
    $('input[name=telefone]').mask('(00) 0000-00000');

    let resposta = false;

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
            resposta = { 'erro': 'true' }
        }
    });

    $('select[name=uf]').on('change', function () {
        vAchou = false;
        const siglaEstado = $(this).val();
        $('select[name=cidade]').empty(); // Limpa o select de cidades
        $('select[name=cidade]').append(`<option value="" disabled selected>Selecione uma cidade</option>`); // Adiciona opção padrão
        $.ajax({
            url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaEstado}/municipios?orderBy=nome`,
            method: 'GET',
            dataType: 'json',
            success: function (cidades) {
                cidades.forEach(function (cidade) {
                    $('select[name=cidade]').append(`<option value="${cidade.id}">${cidade.nome}</option>`);
                    if (cidade.id == resposta.ibge) {
                        vAchou = true;
                    }
                });

                if (vAchou) {
                    $('select[name=cidade]').val(resposta.ibge);
                    //resposta = false;  
                }
            },
            error: function () {
                alert('Erro ao consultar as cidades.');
            }
        });
    });

    $('form').on('submit', function (event) {
        event.stopPropagation();
        event.preventDefault();
    });

    $('input[name=email]').on('keyup', function (event) {
        var email = $('input[name=email]').val();
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!regex.test(email)) {
            alert(email);
            e.preventDefault(); 
            alert('Por favor, insira um endereço de email válido.');
        }
    });
    
 
    $('input[name=telefone]').on('keyup', function (event) {
        if ($('input[name=telefone]').val().length < 15) {
            $('input[name=telefone]').mask('(00) 0000-00000');
        } else {
            $('input[name=telefone]').mask('(00) 00000-0000');
        }
        //$('input[name=telefone]')[0].focus();
        //$('input[name=telefone]')[0].setSelectionRange($('input[name=telefone]').val().length, $('input[name=telefone]').val().length);
    });

    $('input[name=cep]').on('keyup', function (event) {
        let cep = $('input[name=cep]').val();

        cep = cep.replace('-', '');

        if (cep.length == 8) {
            $.ajax('https://viacep.com.br/ws/' + cep + '/json/').done(function (data) {
                resposta = JSON.parse(data);
                if (resposta.erro) {
                    $('input[name=cep]').addClass('is-invalid');
                    return;
                }
                $('input[name=cep]').removeClass('is-invalid');

                $('input[name=cep]').val(resposta.cep);
                $('select[name=uf]').val(resposta.uf).change();
                $('input[name=rua]').val(resposta.logradouro);
                $('input[name=bairro]').val(resposta.bairro);

                $('input[name=rua]').prop('disabled', resposta.logradouro !== '');
                $('input[name=bairro]').prop('disabled', resposta.bairro !== '');
                $('select[name=uf]').prop('disabled', true);
                $('input[name=cidade]').prop('disabled', true);
            });
        } else {
            $('select[name=uf]').prop('disabled', false);
            $('input[name=rua]').prop('disabled', false);
            $('input[name=bairro]').prop('disabled', false);
            $('input[name=cidade]').prop('disabled', false);

            $('select[name=uf]').val('');
            $('select[name=cidade]').val('');
            $('input[name=rua]').val('');
            $('input[name=bairro]').val('');
            $('input[name=numero]').val('');
            $('input[name=complemento]').val('');
            $('input[name=email]').val('');
            $('input[name=telefone]').val('');
        }
    });
});