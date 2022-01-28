import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  listUrl = "https://zakuro-warehouse.herokuapp.com/api/login-history/"
  mailUrl = "https://zakuro-warehouse.herokuapp.com/send_email/"

  // listUrl = "http://127.0.0.1:8000/api/login-history/"
  // mailUrl = "http://127.0.0.1:8000/send_email/"

  sendEmail(email){
    return this.httpClient.post(this.mailUrl, email)
  }
  // for wake up heroku
  getList() {
    return this.httpClient.get(this.listUrl, {headers: this.getTokenFromCookie()})
  }

  getTokenFromCookie(){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token`
    })
  }
}
