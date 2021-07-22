import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class LoginService {

  baseUrl = 'http://localhost:59928/api/';

  constructor(private http: HttpClient) {
  }

  CheckLoginUser(form: FormGroup): Observable<any> {
    console.log(form);

    const headers = { 'content-type': 'application/json' }

    return this.http.post(this.baseUrl + 'check_login_user', form, { 'headers': headers })
  }

}


