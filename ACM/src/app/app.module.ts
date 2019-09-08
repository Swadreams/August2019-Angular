import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseModule } from './course/course.module';
// import { StarComponent } from './shared/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // StarComponent
  ],
  imports: [
    BrowserModule,
    CourseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [ StarComponent ]
})
export class AppModule { }
