$('.produto').click(function(e){
    // Adicionando ao elemento clicado a classe ou removendo se ja existir
    $(this).toggleClass('produto__em--destaque')
})