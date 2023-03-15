import {EventEmitter, Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {Deed} from "./deed.model";
import {map, Observable, Subject} from "rxjs";


@Injectable({providedIn: 'root'})
export class DeedService {

  selectedCategory = "John"
  deedSelected = new EventEmitter<Deed>();
  sortValue = new Subject<string>()

  constructor(private http: HttpClient) {
    this.sortValue.subscribe({
      next: (v) => console.log(`value received in service: ${v}`),
    });
  }

  getDeeds() {
    return this.http
      .get('http://localhost:5000/deeds/get-deeds')
      .pipe(
        map(responseData => {

          const deedsArray = [];

          for (const key in responseData['deeds']) {
            console.log('has own prop', responseData.hasOwnProperty(key))
            if (responseData['deeds'].hasOwnProperty(key)) {
              deedsArray.push({...responseData['deeds'][key], id: key});
            }
          }

          console.log('arrrrrrrrrr');
          console.log(deedsArray);

          return deedsArray;
        })
      );
  }

  postDeed(form: FormGroup) {
    const formData = new FormData();

    for (let key in form.value) {
      formData.append(key, form.value[key]);
    }

    return this.http.post('http://localhost:5000/deeds/create-deed', formData);
    // console.log(form.value);
    // this.http.post(
    //     'http://localhost:5000/deeds/create-deed',
    //     form.value
    // ).subscribe( response => {
    //     console.log(response);
    //     form.reset()
    //     console.log (form)
    // }, error => {
    //     console.log(error);
    // });
  }

  getDeedById(id): Observable<any> {
    return  this.http.get('http://localhost:5000/deeds/get-deed-by-id/' + id);
  }

  getHashTags(): Observable<any> {
    return this.http.get('http://localhost:5000/hash-tags/get-hash-tags');
  }
}





