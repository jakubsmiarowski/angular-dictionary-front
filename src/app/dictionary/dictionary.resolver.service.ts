import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DictionaryModel} from '../dictionary-model';
import {LoadDataService} from '../load-data.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryResolverService {

  constructor(private loadData: LoadDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.loadData.getDictionaries();
  }
}
