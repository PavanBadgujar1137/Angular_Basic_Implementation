import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { SchoolModule } from './school/school.module';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserAuthModule, SchoolModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
