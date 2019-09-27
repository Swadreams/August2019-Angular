import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CourseListComponent } from './course-list/course-list.component';
import { StarComponent } from '../shared/star/star.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from '../shared/summary.pipe';
import { HighlightDirective } from '../shared/highlight.directive';



@NgModule({
  declarations: [
    CourseListComponent,
    StarComponent,
    CourseDetailsComponent,
    EditCourseComponent,
    SummaryPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ CourseListComponent, HighlightDirective]
})
export class CourseModule { }
