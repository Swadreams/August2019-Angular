import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId : any;
  course;
  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

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
          response => this.course = response
        )
  }

}
