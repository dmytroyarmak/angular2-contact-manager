import { Component, OnInit } from '@angular/core';
import { ContactManagerApiService, Contact } from '../contact-manager-api.service';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  constructor(private contactManagerApi: ContactManagerApiService) {}

  contacts: Observable<Contact[]>;

  ngOnInit() {
    this.contacts = this.contactManagerApi.getContacts();
  }

}
