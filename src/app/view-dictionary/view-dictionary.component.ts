import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import {DictionaryModel} from '../dictionary-model';

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

  onSubmit() {
    this.dictKey = this.signupForm.value.userData.dictionary;
    this.dictTypeUrl = this.signupForm.value.type;
    this.fetchDict();
  }

  private fetchDict() {
    if (this.dictKey === '') {
      this.http
        .get<DictionaryModel>(`http://localhost:9098/api/dictionary/${this.dictTypeUrl}`)
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
    }else if (this.dictKey !== '') {
      this.http
        .get<DictionaryModel>(`http://localhost:9098/api/dictionary/${this.dictTypeUrl}/${this.dictKey}`)
        .pipe(map(responseData => {
          const postsArray = [];
          /*for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push(responseData);
            }
          }*/
          postsArray.push(responseData);
          console.log(postsArray);
          return postsArray;
        }))
        .subscribe((dictionary: any[]) => {
          console.log(dictionary);
          this.loadedDicts = dictionary;
          console.log(this.loadedDicts);
        });
    }

  }

}
