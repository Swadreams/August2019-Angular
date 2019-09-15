import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CourseListComponent } from './course-list/course-list.component';
import { StarComponent } from '../shared/star/star.component';
import { CourseDetailsComponent } from './course-details/course-details.component';



@NgModule({
  declarations: [
    CourseListComponent,
    StarComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ CourseListComponent ]
})
export class CourseModule { }
