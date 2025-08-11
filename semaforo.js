const img = document.getElementById('img');
const botoes = document.getElementById('botoes');
let colesIndex = 0;
let intervalId = null;

const semaforo = ( event ) => {
    pararAutomatico();
    ligar[event.target.id]();

}

const nextIndex = () => {

    if(colorIndex < 2){
        colorIndex++;
    } else {
        colorIndex = 0;
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

const ligar = {
    'vermelho' : () => img.scr = './images/vermelho.png',
    'amarelo' : () => img.scr = './images/amarelo.png',
    'verde' : () => img.scr = './images/verde.png',
    'automatico' : () => intervalId = setInterval(trocarCor, 1000 )
}

botoes.addEventListener('click', semaforo);