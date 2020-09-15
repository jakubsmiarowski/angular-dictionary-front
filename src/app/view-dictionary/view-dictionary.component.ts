import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-dictionary',
  templateUrl: './view-dictionary.component.html',
  styleUrls: ['./view-dictionary.component.css'],
})
export class ViewDictionaryComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  submitted = false;
  dictName = '';
  dictType = '';

  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    this.dictName = this.signupForm.value.userData.dictionary;
    this.dictType = this.signupForm.value.type;
    console.log(this.dictName);
    console.log(this.dictType);
  }
}
