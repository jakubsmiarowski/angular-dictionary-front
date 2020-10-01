import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoadDataService} from '../load-data.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;


  constructor(private loadData: LoadDataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = this.signupForm.value.userData;
    console.log(formData);
    this.loadData.createMeta(formData);
  }

}
