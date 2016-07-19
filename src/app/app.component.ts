import { Component } from '@angular/core';
import { ContactsListComponent } from './contacts-list';
import { ContactManagerApiService } from './contact-manager-api.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ContactsListComponent],
  providers: [ContactManagerApiService]
})
export class AppComponent {
  title = 'app works!';
}
