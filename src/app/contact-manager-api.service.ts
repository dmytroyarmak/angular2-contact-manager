import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

export interface Contact {
  id: number;
  name: string;
  email: string;
  tel: string;
  faceId: number;
};

@Injectable()
export class ContactManagerApiService {

  constructor(private http: Http) {}

  private host = 'http://api-contact-manager.herokuapp.com';
  private contactsUrl = this.host + '/contacts';
  
  getContacts(): Observable<Contact[]>  {
    return this.http
      .get(this.contactsUrl)
      .map((res) => res.json())
  }
}
