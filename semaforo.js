const img = document.getElementById('img');
const botoes = document.getElementById('botoes');
const desligar = document.getElementById('desligar');
let coresIndex = 0;
let intervalId = null;

const semaforo = ( event ) => {
    pararAutomatico();
    ligar[event.target.id]();

}

const nextIndex = () => {

    if(coresIndex < 2){
        coresIndex++;
    } else {
        coresIndex = 0;
    }
    
}

const trocarCor = () => {
    const cores = ['vermelho', 'amarelo', 'verde'];
    const cor = cores[coresIndex];
    ligar[cor]();
    nextIndex();
}

const pararAutomatico = () => {
    clearInterval( intervalId);
}

const desligarSemaforo = () => {
    img.src = './images/desligado.png';
}

const ligar = {
    'vermelho' : () => img.src = './images/vermelho.png',
    'amarelo' : () => img.src = './images/amarelo.png',
    'verde' : () => img.src = './images/verde.png',
    'automatico' : () => intervalId = setInterval(trocarCor, 1000 )
}

botoes.addEventListener('click', semaforo);
desligar.addEventListener('click', desligarSemaforo);