import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  template: `
    <h2>{{contact.name}}</h2>

    <dl>
      <dt>Twitter</dt>
      <dd>{{contact.twitter}}</dd>
    </dl>

    <p><a routerLink="/">Back to list</a></p>
  `
})
export class ContactDetailComponent implements OnInit {

  contact;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }
}

