import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.scss'],
})
export class HangmanDisplayComponent implements OnChanges {
  @Input() guesses: string[] = [];
  @Input() question: string = '';
  @Output() gameFinished = new EventEmitter<boolean>()

  maxMistakes = 7;
  mistakesRemaining;
  success: boolean = false

  constructor() {
    this.mistakesRemaining = this.maxMistakes;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (
      changes?.['question']?.currentValue &&
      changes?.['question'].currentValue != changes?.['question'].previousValue
    ) {
      this.mistakesRemaining = this.maxMistakes;
      this.success = false
    }


    const guessesCurrentValue = changes?.['guesses']?.currentValue;
    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue != changes['guesses'].previousValue
    ) {
      // console.log(changes['guesses'].currentValue);
      const char = [...guessesCurrentValue].pop();
      this.checkGuess(char);
    }
  }

  checkGuess(letter: string) {
    // console.log(letter);
    let didWind = true
    this.mistakesRemaining -= this.wasGuessAMistake(letter)
    // console.log(this.mistakesRemaining);


    for (let i = 0; i < this.question.length; i++) {
      if (!this.guesses.find(
        (guess) => guess.toLowerCase() === this.question[i].toLowerCase())) {
        didWind = false; break;
      }
    }
    this.success = didWind
    if (this.success || this.mistakesRemaining === 0) {
      // console.log("Game Ended.");
      this.gameFinished.emit(this.success)
    }
  }

  wasGuessAMistake(letter: string) {

    for (let i = 0; i < this.question.length; i++) {
      if (this.question[i].toLowerCase() === letter.toLowerCase()) {
        return 0
      }
    }
    return 1

  }
}
