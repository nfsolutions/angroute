import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {ContactResolve} from './resolvers/contact.resolve';
import {ContactService} from './services/contact.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactListResolve} from './resolvers/contact-list.resolve';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import { SettingsComponent } from './settings/settings.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { MandatorComponent } from './mandator/mandator.component';

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [],
  declarations: [AppComponent, ContactListComponent, ContactDetailComponent, SettingsComponent, MandatorComponent],
  bootstrap: [AppComponent],
  providers: [
    ContactService,
    ContactResolve,
    ContactListResolve
  ]
})
export class AppModule {
}

