import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paramreq } from './paramreq.model';



@Injectable({
  providedIn: 'root'
})
export class TataService {

  readonly baseURL = 'http://localhost:3001/testing/test2';
  




  constructor(private http: HttpClient) { }

  // getTweets(rem : Paramreq){
  //   return this.http.get(this.baseURL+`/${rem}`)
  // }

  gettwitterdata(text:string):Observable<any>
  {
    return this.http.post('http://localhost:3001/testing/test2',{"q":text})
  }

}
