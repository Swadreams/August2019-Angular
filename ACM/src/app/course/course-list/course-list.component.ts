import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  imageVisible = false;
  courses;
  message: string;

  constructor(private courseService: CourseService, private router: Router) {
  }

  ngOnInit() {
    //this.courses = this.courseService.getCourses();
    this.courseService.getCourses()
        .subscribe(
          response => {
            var coursesData = [];
            response.forEach(
              item => {
                let course;
                course = item.payload.val();
                course.courseId = item.payload.key;
                coursesData.push(course);
              }
            );
            this.courses = coursesData;
            console.log('Courses', this.courses);
          },
          error => {
            console.log('Error occured', error);
          }
        )
  }

  showImage() {
    this.imageVisible = !this.imageVisible;

  }

  ratingRecieved(event) {
    this.message = event;
  }

  showCourseDetails(courseId) {
    this.router.navigate(['/courses/details', courseId]);
  }

}
