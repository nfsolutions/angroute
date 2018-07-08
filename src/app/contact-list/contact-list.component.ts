import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  template: `
    <ul>
      <li *ngFor="let contact of contacts">
        <a [routerLink]="['contact', contact.id]">{{contact.name}}</a>
      </li>
    </ul>
  `
})
export class ContactListComponent implements OnInit {

  contacts: any[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contacts = this.route.snapshot.data['contacts'];
  }
}
