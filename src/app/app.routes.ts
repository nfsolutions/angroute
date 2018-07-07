import {Routes} from '@angular/router';
import {ContactsListComponent} from './contacts-list.component';
import {ContactsDetailComponent} from './contacts-detail.component';
import {ContactResolve} from './contact.resolve';

export const AppRoutes: Routes = [
  {path: '', component: ContactsListComponent},
  {
    path: 'contact/:id',
    component: ContactsDetailComponent,
    resolve: {
      contact: ContactResolve
    }
  }
];

