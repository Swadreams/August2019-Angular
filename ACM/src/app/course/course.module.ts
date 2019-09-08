import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CourseListComponent } from './course-list/course-list.component';
import { StarComponent } from '../shared/star/star.component';



@NgModule({
  declarations: [
    CourseListComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ CourseListComponent ]
})
export class CourseModule { }
