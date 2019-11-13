import { Injectable,EventEmitter, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

/*
  Generated class for the CardsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CardsDataProvider Provider');
  }

  getLocalData() {
  return this.http.get('assets/3664.json')
        .pipe(map((res) => res));  
}
}