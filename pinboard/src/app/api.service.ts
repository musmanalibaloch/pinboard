import { Injectable } from '@angular/core';
import {
 HttpHeaders, HttpClient
} from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  createPin(data){
    return this.http.post(this.baseUrl+"/pins", data);
  }
  getAllPins(page=0)
  {
    return this.http.get(this.baseUrl+`/pins?page=${page}`);
  }
  getPinDetail(pinId)
  {
    return this.http.get(`this.baseUrl/pins/${pinId}`);
  }
  httpOptions(type:string="application/json"){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  type
      })
    };
    return httpOptions;
  }
}
