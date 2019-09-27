import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseModule } from './course/course.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    CourseModule,
    AdminModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,

    /* Modules related to firebase */
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
