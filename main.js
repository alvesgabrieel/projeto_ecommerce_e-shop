$(document).ready(function() {

    $('#tel').mask('(00) 00000-0000');

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite o seu nome',
            email: 'Por favor, digite seu email',
            tel: 'Por favor, digite seu telefone'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campo(s) incorreto(s)`)
            }
        }
    }) 

})