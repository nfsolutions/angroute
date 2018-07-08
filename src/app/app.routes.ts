import {Routes} from '@angular/router';
import {ContactResolve} from './resolvers/contact.resolve';
import {ContactListResolve} from './resolvers/contact-list.resolve';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {SettingsComponent} from './settings/settings.component';
import {MandatorComponent} from './mandator/mandator.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    resolve: {
      contacts: ContactListResolve
    }
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent,
    resolve: {
      contact: ContactResolve
    }
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'mandator',
    component: MandatorComponent,
  }
];

