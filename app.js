const choices_div = document.querySelector('.choices');
const choice_div = document.querySelectorAll('.choice');
const red_div = document.querySelector('#red');
const yellow_div = document.querySelector('#yellow');
const blue_div = document.querySelector('#blue');
const green_div = document.querySelector('#green');
const empezar = document.querySelector('#empezar');

const coloresSimon = [];

function playMachine() {
    const maximaJugada = 20;
    for (let i = 0; i < maximaJugada; i++) {
        coloresSimon.push(Math.floor(Math.random() * 4));
    }
}
playMachine();
/*
function showNum(){

    for (let i = 0; i < coloresSimon.length; i++) {
        console.log(coloresSimon[i]);
    }
}
*/
/*function computerChoice(){
    const randomNumber = Math.floor(Math.random() * 4);
    if(randomNumber == 0){
        playBlue();
    }
    if(randomNumber == 1){
        playGreen();
    }
    if(randomNumber == 2){
        playRed();
    }
    if(randomNumber == 3){
        playYellow();
    }
}
*/
function computerChoice(coloresSimon){
  for (let i = 0; i < coloresSimon.length; i++) {
    if(coloresSimon[i] == 0){
        playBlue();
    }
    if(coloresSimon[i] == 1){
        playGreen();
    }
    if(coloresSimon[i] == 2){
        playRed();
    }
    if(coloresSimon[i] == 3){
        playYellow();
    }
  }
}
computerChoice(coloresSimon);

function playBlue(){
    console.log("Click in Blue")
    blue_div.classList.add('blue-glow');
    setTimeout(() =>  blue_div.classList.remove('blue-glow'), 800 );
}

function playGreen(){
    console.log("Click in green")
    green_div.classList.add('green-glow');
    setTimeout(() =>  green_div.classList.remove('green-glow'), 800 );
 }

 function playYellow(){
     console.log("Click in yellow");
     yellow_div.classList.add('yellow-glow');
     setTimeout(() =>  yellow_div.classList.remove('yellow-glow'), 800 );
 }

 function playRed(){
    console.log("click in red");
    red_div.classList.add('red-glow');
    setTimeout(() =>  red_div.classList.remove('red-glow'), 800 );
 }

 /*
function main (){
    empezar.addEventListener('click', function(){
        computerChoice();
})    
    red_div.addEventListener('click', function (){
        playRed();
})
    yellow_div.addEventListener('click', function (){
        playYellow();
})
    blue_div.addEventListener('click', function (){
        playBlue();
})
    green_div.addEventListener('click', function (){
        playGreen();
})
}
*/
// main();
// TODO
// crear las funciones play.. de los demas colores y que resalte por 3 seg (agregar en C)
// cuando iniciar el juego que el eleija un numero random del 0 al 3