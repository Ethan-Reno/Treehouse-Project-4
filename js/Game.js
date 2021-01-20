/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
      this.missed = 0;
      this.phrases = 
       ['Absolute power corrupts absolutely',
        'Verbosity leads to unclear, inarticulate things',
        'A riddle wrapped up in an enigma',
        'Let a thousand flowers bloom',
        'From sea to shining sea'];
      this.activePhrase = null;
    }
};


    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }
    */