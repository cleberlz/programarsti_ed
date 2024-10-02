$(document).ready(function () {
    $('input[name=cep]').mask('00000-000');
    $('input[name=numero]').mask('#');

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
            $.ajax('https://viacep.com.br/ws/'+cep+'/json/').done(function (data){
                resposta = JSON.parse(data);
                if (resposta.erro){
                    $('input[name=cep]').addClass('is-invalid');
                    return;
                }
                $('input[name=cep]').removeClass('is-invalid');

                $('input[name=uf]').val(resposta.uf + ' - ' + resposta.estado);
                $('input[name=rua]').val(resposta.logradouro);
                $('input[name=bairro]').val(resposta.bairro);
                $('input[name=cidade]').val(resposta.localidade);
                $('input[name=cep]').val(resposta.cep);
                $('input[name=estado]').val();
            });
        }
    });
});