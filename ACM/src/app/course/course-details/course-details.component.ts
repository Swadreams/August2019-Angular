import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId : any;
  course;
  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      response => {
        this.courseId = response.get('id');
        this.getCourse();
      }
    )
  }

  getCourse() {
    this.courseService.getCourse(this.courseId)
        .subscribe(
          response => {
            this.course = response;
            console.log(this.course);
          }
        )
  }

  navigateToCourses() {
    this.router.navigate(['/courses']);
  }

  deleteCourse() {
    alert('This will remove the course form server.');
    this.courseService.deleteCourse(this.courseId)
        .then(
          response => {
            alert('Course deleted successfully. Enjoy!');
            this.router.navigate(['/courses']);
          },
          error => {
            console.log('error', error);
          }
        )
  }
}
