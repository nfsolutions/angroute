import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: 'contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {

  contact;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }
}

