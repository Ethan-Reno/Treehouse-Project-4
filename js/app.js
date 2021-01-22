/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
const gameButton = document.getElementById('btn__reset');

gameButton.addEventListener ('click', (e)=> {
    game = new Game();
    game.startGame();
});

let keyboard = document.getElementsByClassName('key');

for (let i = 0; i < keyboard.length; i ++) {
    keyboard[i].addEventListener ('click', (e) => {
        game.handleInteraction(e.target);
 });
}