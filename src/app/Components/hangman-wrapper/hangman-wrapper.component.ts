import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HangmanDataService } from 'src/app/Services/hangman-data.service';

@Component({
  selector: 'app-hangman-wrapper',
  templateUrl: './hangman-wrapper.component.html',
  styleUrls: ['./hangman-wrapper.component.scss']
})
export class HangmanWrapperComponent implements OnInit {

  category: string = ''
  questions: string[] = []
  question: string = ''
  guesses: string[] = []
  restartGameBtnShown = false;

  constructor(private hangmanService: HangmanDataService, private location: Location) { }

  ngOnInit(): void {

    let jsonPath;
    const url = this.location.path()

    if (url.includes('jsonPath')) {
      jsonPath = url.split('jsonPath=')[1]
    }

    this.hangmanService.getQuestions(jsonPath).subscribe((res) => {
      this.category = res.category
      this.questions = res.items
      this.PickNewQuestion()
    })
  }

  Reset() {
    this.guesses = []
    this.PickNewQuestion()
    this.restartGameBtnShown = false
  }

  PickNewQuestion() {
    // console.log(this.questions);
    const randomIndex = Math.floor(Math.random() * this.questions.length)
    this.question = this.questions[randomIndex]
    console.log(this.question);
  }

  guess(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return
    } this.guesses = [...this.guesses, letter]
  }

  dummyClick() {
    const key = prompt('Enter a key') || ''
    this.guess(key)
  }

  onGameFinished() {
    this.restartGameBtnShown = true
  }


}
