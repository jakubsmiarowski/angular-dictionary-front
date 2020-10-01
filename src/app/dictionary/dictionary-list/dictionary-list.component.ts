import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadDataService } from '../../load-data.service';
import {DictionaryModel} from '../../dictionary-model';

@Component({
  selector: 'app-dictionaries-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css'],
})
export class DictionaryListComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  dictKey = '';
  dictTypeUrl = '';
  loadedDicts = [];
  loadedMeta = [];
  searchedByKey: boolean;

  constructor(private loadData: LoadDataService) {}

  ngOnInit(): void {
    this.onFetchMeta();
  }

  onSubmit() {
    this.dictKey = this.signupForm.value.userData.key;
    this.dictTypeUrl = this.signupForm.value.type;
    if (this.dictKey === ''){
      this.searchedByKey = false;
      this.loadData
        .fetchDicts(this.dictKey, this.dictTypeUrl)
        .subscribe((dictionary: DictionaryModel[]) => {
          this.loadedDicts = dictionary;
        });
    }else if (this.dictKey !== '') {
      this.searchedByKey = true;
      this.loadData
        .fetchDicts(this.dictKey, this.dictTypeUrl)
        .subscribe((dictionary: DictionaryModel[]) => {
          console.log(dictionary);
          this.loadedDicts = dictionary;
        });
    }
  }

  onFetchMeta(){
    this.loadData
      .fetchMeta()
      .subscribe(meta => {
        console.log(meta);
        this.loadedMeta = meta;
      });
  }
}
