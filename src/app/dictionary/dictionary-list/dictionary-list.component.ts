import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadDataService } from '../../load-data.service';

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

  constructor(private loadData: LoadDataService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.dictKey = this.signupForm.value.userData.dictionary;
    this.dictTypeUrl = this.signupForm.value.type;
    this.loadData
      .fetchDicts(this.dictKey, this.dictTypeUrl)
      .subscribe((dictionary: any[]) => {
        this.loadedDicts = dictionary;
      });
  }
}
