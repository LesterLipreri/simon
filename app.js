const choices_div = document.querySelector('.choices');
const choice_div = document.querySelectorAll('.choice');
const red_div = document.querySelector('#red');
const yellow_div = document.querySelector('#yellow');
const blue_div = document.querySelector('#blue');
const green_div = document.querySelector('#green');
const empezar = document.querySelector('#empezar');

const coloresSimon = [];
let intervalId;
let con = 0;

function playMachine() {
    const maximaJugada = 20;
    for (let i = 0; i < maximaJugada; i++) {
        coloresSimon.push(Math.floor(Math.random() * 4));
    }
}


function computerChoice(){
 
    if (con >= 20){
        console.log("FIN");
        clearInterval(intervalId);
        return;
        
    } 
    for (let i = 0; i < coloresSimon.length; i++) {
        con++;
        setTimeout(() => {
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
        }, 1000 * i)
  }
}


function playBlue(){
    console.log("Click in Blue")
    blue_div.classList.add('blue-glow');
    setTimeout(() =>  blue_div.classList.remove('blue-glow'), 400 );
}

function playGreen(){
    console.log("Click in green")
    green_div.classList.add('green-glow');
    setTimeout(() =>  green_div.classList.remove('green-glow'), 400 );
 }

 function playYellow(){
     console.log("Click in yellow");
     yellow_div.classList.add('yellow-glow');
     setTimeout(() =>  yellow_div.classList.remove('yellow-glow'), 400 );
 }

 function playRed(){
    console.log("click in red");
    red_div.classList.add('red-glow');
    setTimeout(() =>  red_div.classList.remove('red-glow'), 400 );
 }

 empezar.addEventListener('click', function(){
    let intervalHandle =0;
    console.log("Comenzando!!");
        playMachine();
        intervalId = setInterval(computerChoice,900);
})

