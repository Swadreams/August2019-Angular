import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  imageVisible = false;
  courses;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    //this.courses = this.courseService.getCourses();
    this.courseService.getCourses()
        .subscribe(
          response => {
            this.courses = response;
          },
          error => {
            console.log('Error occured', error);
          }
        )
  }

  showImage() {
    this.imageVisible = !this.imageVisible;

  }

}
