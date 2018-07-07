import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'contacts-detail',
  template: `
    <h2>{{contact.name}}</h2>

    <dl>
      <dt>Twitter</dt>
      <dd>{{contact.twitter}}</dd>
    </dl>

    <p><a routerLink="/">Back to list</a></p>
  `
})
export class ContactsDetailComponent implements OnInit {

  contact;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }
}

