import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-meta',
  templateUrl: './view-meta.component.html',
  styleUrls: ['./view-meta.component.css']
})
export class ViewMetaComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  loadedMeta = [];
  metaType = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.metaType = this.signupForm.value.type;
    console.log(this.metaType);
    this.fetchMeta();
  }

  private fetchMeta() {
    this.http
      .get(`http://localhost:9098/api/metadata/${this.metaType}`)
      .pipe(map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key } );
          }
        }
        return postsArray;
      }))
      .subscribe((dictionary) => {
        console.log(dictionary);
        this.loadedMeta = dictionary;
      });
  }
}
