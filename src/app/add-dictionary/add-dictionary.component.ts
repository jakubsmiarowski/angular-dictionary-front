import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoadDataService} from '../load-data.service';
import { Subscription } from 'rxjs';

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
  error = null;
  private errorSub: Subscription;

  constructor(private loadData: LoadDataService) { }

  ngOnInit(): void {
    this.errorSub = this.loadData.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
  }
  onSubmit(dictData){
    this.dictTypeUrl = this.signupForm.value.userData.type;
    console.log(this.signupForm.value.userData);
    /*console.log(dictData);*/
    this.loadData.createAndStoreDicts(this.signupForm.value.userData);
  }

}
