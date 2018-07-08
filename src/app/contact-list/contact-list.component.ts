import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: 'content-list.component.html'
})
export class ContactListComponent implements OnInit {

  contacts: any[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contacts = this.route.snapshot.data['contacts'];
  }
}
