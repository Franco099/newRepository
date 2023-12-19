// --------------------------  IMPORTAR ELEMENTOS DEL DOM - HTML -----------------------------------------------

// Jugadores

const p1 = {
    score: 0, // Puntos
    button: document.querySelector('#p1Button'), // Boton
    display: document.querySelector('#p1Display'), // Display
}

const p2 = { 
    score: 0, // Puntos
    button: document.querySelector('#p2Button'), // Botón
    display: document.querySelector('#p2Display'), // Display
}

const resetButton = document.querySelector('#resetButton') // Boton Reset
const selector = document.querySelector('#selector')  // Selector Puntaje máximo

// ------------------------------------------- FUNCIONES -----------------------------------------------------

// Definición de variables
let winningScore = 5;
let isGameOver = false;

// Funcion para actualizar marcador.

function updateScores(player, opponent) {
    if (!isGameOver) // Si isGameOver es falso
        player.score += 1; // Agrega 1
    if (player.score === winningScore) { // Y si el marcador es igual al marcador ganador.
        isGameOver = true; // Entonces isGameOver se vuelve verdadero.
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        player.button.disabled = true;
        opponent.button.disabled = true;
        celebrar();
    }
    player.display.textContent = player.score; // Display del p1 muestra en texto el puntaje del p1.
}

function reset() { // Función reset
    isGameOver = false; // isGameOver se vuelve falso
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        p.display.style.color = 'black';
    }
};



function celebrar(){
    let animation = document.querySelector('.card');
    animation.classList.add('celebrar');
    setTimeout(function(){animation.classList.remove('celebrar');}, 3000);
}

// ---------------------------------------EVENTOS-------------------------------------------------

p1.button.addEventListener('click', function () { // Evento click en botón p1
    updateScores(p1, p2)
});

p2.button.addEventListener('click', function () { // Evento click en botón p2
    updateScores(p2, p1)
});

selector.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset) // Evento al clickear el botón reset

