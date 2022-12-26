import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ToxicMessageValidator } from './toxicValidator';

@Component({
  selector: 'app-nlp',
  templateUrl: './nlp.component.html',
  styleUrls: ['./nlp.component.css']
})
export class NlpComponent implements OnInit {

  nlpInput = new FormControl('', [], ToxicMessageValidator.createValidator());
  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {}
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
