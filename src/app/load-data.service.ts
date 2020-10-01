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

  constructor(private http: HttpClient) { }



  fetchDicts(key: string, type: string) {
    if (key === '') {
      return this.http
        .get<DictionaryModel[]>(`http://localhost:9098/api/dictionary/${type}`)
        .pipe(map(responseData => {
          const dictArray: DictionaryModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              dictArray.push( responseData[key]  );
            }
          }
          console.log(dictArray);
          return dictArray;
        }));
    }else if (key !== '') {
      return this.http
        .get(`http://localhost:9098/api/dictionary/${type}/${key}`)
        .pipe(map(responseData => {
          console.log(responseData);
          const dictArray = [];
          dictArray.push(responseData);
          return dictArray;
        }));
    }
  }
  createAndStoreDicts(data: DictionaryModel) {
    this.http
      .post<DictionaryModel[]>('http://localhost:9098/api/dictionary',
        data
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        console.log(error);
        this.error.next(error.error.error_description);
      });
  }
  createMeta(metaData) {
    this.http
      .post('http://localhost:9098/api/metadata', metaData)
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        console.log(error);
      });
  }
  fetchMeta() {
    return this.http
      .get('http://localhost:9098/api/metadata')
      .pipe(map(responseData => {
        console.log(responseData);
        const postsArray = [];
        postsArray.push(responseData);
        return postsArray;
      }));
  }
}
