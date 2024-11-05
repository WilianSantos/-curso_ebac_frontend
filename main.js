const form = document.getElementById('form');

const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');

const containerErrorMessage =  document.querySelector('.error-message');
const containerSuccessMessage =  document.querySelector('.success-message');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numberAValue = parseInt(numberA.value);
    const numberBValue = parseInt(numberB.value);
     
    if (numberAValue < numberBValue) {
        containerSuccessMessage.innerHTML = `O <b>${numberA.value}</b> é menor que <b>${numberB.value}</b> - validado com sucesso.`;
        containerSuccessMessage.style.display = 'block';
        
        
        numberA.value = '';
        numberB.value = '';
        
    } else {
        numberB.classList.add('error');
        
        containerErrorMessage.innerHTML = `O <b>${numberA.value}</b> é maior que <b>${numberB.value}</b> - segundo número precisa ser maior.`;
        containerErrorMessage.style.display = 'block';
    }
   
})

numberB.addEventListener('keyup', function(e){
    console.log(e.target.value); 

    const numberAValue = parseInt(numberA.value);
    const numberBValue = parseInt(e.target.value);

    if (numberAValue > numberBValue) {
        numberB.classList.remove('success')
        numberB.classList.add('error')
        
        containerErrorMessage.innerHTML = `O <b>${numberA.value}</b> é maior que <b>${numberB.value}</b> - segundo número precisa ser maior.`;
        containerErrorMessage.style.display = 'block';
    } else {
        numberB.classList.remove('error')
        containerErrorMessage.style.display = 'none';

        numberB.classList.add('success')
    
    }
})
