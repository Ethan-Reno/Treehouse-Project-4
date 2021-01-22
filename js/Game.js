/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = 
      [new Phrase('The Lord of the Rings'),
       new Phrase('Star Wars'),
       new Phrase('Harry Potter'),
       new Phrase('The Chronicles of Narnia'),
       new Phrase('Firefly')];
    return phrases;
  }

/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
  getRandomPhrase() {
    const phraseNumber = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[phraseNumber];
    return randomPhrase;
  }

/**
 * Starts the game by reseting the game state, removing the overlay, and calling methods to generate and display a phrase.
 */
  startGame() {
    this.reset();
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

/**
 * Resets the game state when called
 */
  reset() {
      const keyboard = document.querySelectorAll('.key');
      for (let i = 0; i < keyboard.length; i++){
        keyboard[i].disabled = false;
        keyboard[i].classList.remove('chosen', 'wrong');
      }
      const lives = document.querySelectorAll('img');
      for (let i = 0; i < lives.length; i++){
        lives[i].src = 'images/liveheart.png';
      }
      const phraseUl = document.querySelector('#phrase').firstElementChild;
      while(phraseUl.lastChild){
        phraseUl.removeChild(phraseUl.lastChild);
      }
  }

/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't won
 */
  checkForWin() {
    let phraseLis = document.getElementById('phrase').firstElementChild.children;
    let displayedCount = 0;
    for (let i = 0; i < phraseLis.length; i ++) {
      if (phraseLis[i].classList.contains('show') || phraseLis[i].textContent === ' ') {
        displayedCount ++;
      }
    }
    if (displayedCount === phraseLis.length) {
      return true;
    } else {
      return false;
    }
  }

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
  removeLife() {
    this.missed ++;
    document.getElementsByTagName('img')[this.missed - 1].src = 'images/lostHeart.png';
    if (this.missed === 5) {
      this.gameOver('lose')
    }
  }

/**
 * Displays game over message
 * @param {boolean} gameLost - Whether or not the user won the game
 */
  gameOver(outcome) {
    let message = document.getElementById('game-over-message')
    if (outcome === 'lose') {
      message.textContent = 'You lost the game';
      document.getElementById('overlay').className = outcome;
      document.getElementById('overlay').style.display = 'flex';
    } else if (outcome === 'win') {
      message.textContent = 'You won the game';
      document.getElementById('overlay').className = outcome;
      document.getElementById('overlay').style.display = 'flex';
    }
    document.getElementById('btn__reset').textContent = 'Play Again?';
  }

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */
  handleInteraction(button) {
    button.setAttribute('disabled', 'true');
    const keyboard = document.querySelectorAll('.key');
    if (this.activePhrase.checkLetter(button.textContent)) {
      for (let i = 0; i < keyboard.length; i ++) {
        if (button.textContent === keyboard[i].textContent) {
          button.classList.add('chosen');
        }
      }
      this.activePhrase.showMatchedLetter(button.textContent)
      if (this.checkForWin()) {
        this.gameOver('win');
      }
    } else {
      for (let i = 0; i < keyboard.length; i ++) {
        if (button.textContent === keyboard[i].textContent) {
          button.classList.add('wrong');
        }
      }
      this.removeLife();
    }
  }
}