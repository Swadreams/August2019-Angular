import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CourseListComponent } from './course-list/course-list.component';



@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ CourseListComponent ]
})
export class CourseModule { }
