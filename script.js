const botao = document.querySelector('#botao');
const body = document.querySelector('body');


function darkmod(){
    if(body.classList.contains('light')){
        body.classList.replace('light', 'dark');
        botao.innerHTML = 'Light';
    }else{
        body.classList.replace('dark','light');
        botao.innerHTML = 'Dark'
    }
}


botao.addEventListener('click', darkmod);