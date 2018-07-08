import {Routes} from '@angular/router';
import {ContactsListComponent} from './contacts-list.component';
import {ContactsDetailComponent} from './contacts-detail.component';
import {ContactResolve} from './contact.resolve';
import {ContactListResolve} from './contact-list.resolve';

export const AppRoutes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
    resolve: {
      contacts: ContactListResolve
    }
  },
  {
    path: 'contact/:id',
    component: ContactsDetailComponent,
    resolve: {
      contact: ContactResolve
    }
  },
];

