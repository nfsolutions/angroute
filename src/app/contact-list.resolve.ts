import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {ContactsService} from './contacts.service';

@Injectable()
export class ContactListResolve implements Resolve<any> {

  constructor(private contactsService: ContactsService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactsService.getContacts();
  }
}
