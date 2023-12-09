$(document).ready(function() {

    //BOTAO IMAGEM +
    $('header button').click(function(){
        $('form').slideDown();

    })

    //BOTÃO DE CANCELAR
    $('#botao-cancelar').click(function(){

        $('form').slideUp();

    })

    //BOTAO DE ADICIONAR A IMAGEM
    $('form').on('submit', function(e){

        e.preventDefault();
        const tituloTarefa = $('#input-titulo-tarefa').val();
        const descricaoTarefa = $('#input-descricao-tarefa').val();
        console.log(tituloTarefa);
        console.log(descricaoTarefa)
        const novoItem = $('<li style=" display: none"></li>');

        $(` 
            <div class="container">
                <div class="conteudo-tarefa">
                <h3 class="titulo-tarefa">${tituloTarefa}</h3>
                <p class="descricao-tarefa">${descricaoTarefa}</p>
            </div>
            <button class="botao-excluir"><i class="fas fa-trash-alt"></i></button>
            </div>
            `).appendTo(novoItem);



        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();

        $('#input-titulo-tarefa').val(' ');
        $('#input-descricao-tarefa').val(' ');

    })

    $('ul').on('click', '.botao-excluir', function() {
        $(this).closest('li').fadeOut(function(){
            $(this).remove();
        });
    });

})