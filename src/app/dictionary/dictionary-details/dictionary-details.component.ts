import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {DictionaryModel} from '../../dictionary-model';
import {LoadDataService} from '../../load-data.service';

@Component({
  selector: 'app-dictionary-details',
  templateUrl: './dictionary-details.component.html',
  styleUrls: ['./dictionary-details.component.css']
})
export class DictionaryDetailsComponent implements OnInit {
  dictionary: DictionaryModel;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loadData: LoadDataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.dictionary = this.loadData.getDictionary(this.id);
    });
  }
}
