/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
/**
 * Display phrase on game board
 */
    addPhraseToDisplay() {
        const ul = document.getElementById('phrase').firstElementChild;
        for (let i = 0; i < this.phrase.length; i ++) {
            let li = document.createElement('li');
            li.textContent = this.phrase[i];
            if (li.textContent === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('hide', 'letter', `${this.phrase[i]}`);
            }
            ul.appendChild(li);
        }
    }

/**
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
 */
    checkLetter(letter) {
        let matchCount = 0;
        for (let i = 0; i < this.phrase.length; i ++) {
            if (letter === this.phrase[i]) {
             matchCount ++;
            }
        }
        if (matchCount > 0) {
            return true;
        } else {
            return false;
        }
    }

/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */
    showMatchedLetter(letter) {
        const letterLi = document.getElementById('phrase').firstElementChild.children;
        for (let i = 0; i < letterLi.length; i ++) {
            if (letterLi[i].textContent === letter) {
                letterLi[i].classList.add('show');
                letterLi[i].classList.remove('hide');
            }
        }
    }
};