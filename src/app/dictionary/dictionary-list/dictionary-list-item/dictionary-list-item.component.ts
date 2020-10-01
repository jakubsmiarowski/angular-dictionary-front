import {Component, Input} from '@angular/core';
import {DictionaryModel} from '../../../dictionary-model';

@Component({
  selector: 'app-dictionary-list-item',
  templateUrl: './dictionary-list-item.component.html',
})

export class DictionaryListItemComponent {
  @Input() dict;
  @Input() isSearchedByKey = false;


}
