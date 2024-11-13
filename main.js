$(document).ready(function () {
    

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const taskName = $('#task-name').val();
        const list = $('#list');
        const li = `<li>${taskName}</li>`;
    
        list.append(li); 
        $('#task-name').val('');
    })

    $('#list').on('click', 'li', function() {
        const li = $(this)
        li.addClass('line-through')
        
    })
})