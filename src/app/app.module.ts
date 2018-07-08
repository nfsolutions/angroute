import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {ContactResolve} from './contact.resolve';
import {ContactsService} from './contacts.service';
import {ContactsListComponent} from './contacts-list.component';
import {ContactsDetailComponent} from './contacts-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactListResolve} from './contact-list.resolve';

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [],
  declarations: [AppComponent, ContactsListComponent, ContactsDetailComponent],
  bootstrap: [AppComponent],
  providers: [
    ContactsService,
    ContactResolve,
    ContactListResolve
  ]
})
export class AppModule {
}

