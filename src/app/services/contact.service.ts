import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const contacts = [
  {id: 1, name: 'Pascal Precht', twitter: '@PascalPrecht'},
  {id: 2, name: 'Christoph Burgdorf', twitter: '@cburgdorf'},
  {id: 3, name: 'Thomas Burleson', twitter: '@thomasburleson'},
  {id: 4, name: 'Dominic Elm', twitter: '@elmd_'}
];

@Injectable()
export class ContactService {

  getContacts() {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(contacts);
        observer.complete();
      }, 3000);
    });
  }

  getContact(id) {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(contacts.find((contact) => contact.id == id));
        observer.complete();
      }, 3000);
    });
  }
}
