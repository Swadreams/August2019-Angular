import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  coursesUrl = 'https://32423raw.githubusercontent.com/Swadreams/July-2019/courses-data/courses.json';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(this.coursesUrl)
  }
}
