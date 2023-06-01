$(document).ready(function(){
    $('#carrossel-imagens').slick({ // Utilizamos para fazer o carrossel de imagens
        autoplay: true,
    })


$('.menu-hamburguer').click(function() {
    $('nav').slideToggle(); // Utilizamos o slideToggle para mostrar nossa barra de navegação.
})

$('#telefone').mask('(00) 00000-0000');

$('#cpf').mask('000.000.000-00');

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {

        },
        telefone: {
            required: true,
        },
        cpf: {
            required: true
        },
        mensagem: {
            required: false
        }
    },

    submitHandler: function(form) {
        console.log(form);
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos) {
            alert(`Existem${camposIncorretos} campos incorretos, favor preencher corretamente.`)
        }
    }
})
// Na funcão á baixo fiz para quando clicar nos botões ''tenho interesse me leve para o formulário para contato
$('.lista-viagens button').click(function(){ // fizemos a função com a classe de veiculos 
    const destino = $('#contato'); // tivemos que criar uma variavel para a tag 'contato'
    const nomeViagem = $(this).parent().find('h3').text();

    $('#vigem-interesse').val(nomeViagem);

    $('html').animate({ // a animação tem que ser feito com essa sintaxe
        scrollTop: destino.offset().top
    }, 1000) // o '1000' Representa '1segundo' de transição
})

})








