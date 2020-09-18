import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DictionaryModel} from '../dictionary-model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-dictionary',
  templateUrl: './add-dictionary.component.html',
  styleUrls: ['./add-dictionary.component.css']
})
export class AddDictionaryComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  dictKey = '';
  dictTypeUrl = '';
  submitted: false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(dictData: DictionaryModel){
    this.dictTypeUrl = this.signupForm.value.userData.type;
    console.log(dictData);
    console.log(this.dictTypeUrl);
    this.http
      .post<DictionaryModel>(`http://localhost:9098/api/dictionary/${this.dictTypeUrl}`,
        dictData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
