import {Component, OnInit} from '@angular/core';
import {ContactsService} from './contacts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'contacts-list',
  template: `
    <ul>
      <li *ngFor="let contact of contacts">
        <a [routerLink]="['contact', contact.id]">{{contact.name}}</a>
      </li>
    </ul>
  `
})
export class ContactsListComponent implements OnInit {

  contacts: any[];

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.route.snapshot.data['contacts'];
  }
}
