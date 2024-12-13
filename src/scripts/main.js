document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form') 

    
    let lines = ''

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const name = document.getElementById('name')
        const cellPhone = document.getElementById('cell-phone')
        
        let line = `<tr><td>${name.value}</td><td>${cellPhone.value}</td></tr>`
        lines += line

        const tBody = document.querySelector('tbody')
        tBody.innerHTML = lines

        name.value = ''
        cellPhone.value = ''
    })
})