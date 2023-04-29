import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanWrapperComponent } from './hangman-wrapper.component';

describe('HangmanWrapperComponent', () => {
  let component: HangmanWrapperComponent;
  let fixture: ComponentFixture<HangmanWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
