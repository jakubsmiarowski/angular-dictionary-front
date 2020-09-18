import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-dictionary',
  templateUrl: './view-dictionary.component.html',
  styleUrls: ['./view-dictionary.component.css'],
})
export class ViewDictionaryComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  dictKey = '';
  dictTypeUrl = '';
  loadedDicts = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
    this.dictKey = this.signupForm.value.userData.dictionary;
    this.dictTypeUrl = this.signupForm.value.type;
    this.fetchDict();
  }

  private fetchDict() {
    this.http
      .get(`http://localhost:9098/api/dictionary/${this.dictTypeUrl}`)
      .pipe(map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key } );
          }
        }
        return postsArray;
      }))
      .subscribe((dictionary) => {
        console.log(dictionary);
        this.loadedDicts = dictionary;
      });
  }

}
