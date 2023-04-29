import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HangmanWrapperComponent } from './Components/hangman-wrapper/hangman-wrapper.component';
import { HangmanDisplayComponent } from './Components/hangman-display/hangman-display.component';
import { HangmanQuestionComponent } from './Components/hangman-question/hangman-question.component';
import { HangmanKeyboardComponent } from './Components/hangman-keyboard/hangman-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanWrapperComponent,
    HangmanDisplayComponent,
    HangmanQuestionComponent,
    HangmanKeyboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
