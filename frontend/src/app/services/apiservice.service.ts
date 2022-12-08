import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  

  // connect frontend to backend
  apiUrl = 'http://localhost:3000/user';

  // get all data
  getAllData() {

  }




}
