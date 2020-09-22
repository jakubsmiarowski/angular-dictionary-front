import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DictionaryModel} from './dictionary-model';
import { Subject, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  error = new Subject<string>();
  private dictionaries: DictionaryModel[] = [];

  constructor(private http: HttpClient) { }

  getDictionary(index: number) {
    return this.dictionaries[index];
  }
  getDictionaries() {
    this.dictionaries.slice();
  }

  fetchDicts(key: string, type: string) {
    if (key === '') {
      return this.http
        .get<DictionaryModel[]>(`http://localhost:9098/api/dictionary/${type}`)
        .pipe(map(responseData => {
          const postsArray: DictionaryModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push( responseData[key]  );
            }
          }
          console.log(postsArray);
          return postsArray;
        }));
    }else if (key !== '') {
      return this.http
        .get/*<DictionaryModel[]>*/(`http://localhost:9098/api/dictionary/${type}/${key}`)
        .pipe(map(responseData => {
          console.log(responseData);
          const postsArray/*: DictionaryModel[]*/ = [];
          /*for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push(responseData);
            }
          }*/
          postsArray.push(responseData);
          return postsArray;
        }));
    }
  }
  createAndStoreDicts(data: DictionaryModel) {
    this.http
      .post/*<DictionaryModel[]>*/('http://localhost:9098/api/dictionary',
        data
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        console.log(error);
        this.error.next(error.error.error_description);
      });
  }
}
