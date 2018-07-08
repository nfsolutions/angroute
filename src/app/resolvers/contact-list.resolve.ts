import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Injectable()
export class ContactListResolve implements Resolve<any> {

  constructor(private contactService: ContactService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactService.getContacts();
  }
}
