import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courseId : any;
  course;
  courseForm;
  isNewCourse = false;
  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe(
      response => {
        this.courseId = response.get('id');
        if(this.courseId !== 'new') {
          this.isNewCourse = false;
          this.getCourse();
        } else {
          this.isNewCourse = true;
        }
      }
    )
  }

  getCourse() {
    this.courseService.getCourse(this.courseId)
        .subscribe(
          response => {
            this.course = response;
            this.setForm();
            console.log(this.course);
          }
        )
  }

  createForm() {
    this.courseForm = this.fb.group({
      "courseCode" : "",
      "courseId" : "",
      "courseName" : "",
      "description" : "",
      "imageUrl" : "",
      "nextBatchDate" : "",
      "price" : "",
      "starRating" : "",
      "trainer" : ""
    })
  }

  setForm() {
    this.courseForm.patchValue({
      "courseCode" : this.course.courseCode,
      "courseId" : this.course.courseId,
      "courseName" : this.course.courseName,
      "description" : this.course.description,
      "imageUrl" : this.course.imageUrl,
      "nextBatchDate" : this.course.nextBatchDate,
      "price" : this.course.price,
      "starRating" : this.course.starRating,
      "trainer" : this.course.trainer
    })
  }

  submitForm() {
    if(!this.isNewCourse) {
      this.updateCourse();
    } else {
      this.addCourse();
    }
  }

  updateCourse() {
    this.courseService.udpateCourse(this.courseForm.value, this.courseId)
        .then(
            response => {
              alert('Course Updated successfully.');
              console.log('respones', response);
              this.router.navigate(['/courses/details', this.courseId]);
            },
            error => {
              console.log(error);
            }
        )
  }

  addCourse() {
      this.courseService.addCourse(this.courseForm.value)
          .then(
            response => {
              this.router.navigate(['/courses']);
            },
            error => {
              console.log('Error', error);
            }
          )
  }

}
