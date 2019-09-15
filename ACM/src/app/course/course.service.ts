import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  coursesUrl = 'https://raw.githubusercontent.com/Swadreams/July-2019/courses-data/courses.json';

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase) {

  }

  getCourses1() {
    return this.http.get(this.coursesUrl)
  }

  getCourses() {
    return this.db.list('/courses').snapshotChanges();
  }

  getCourse(id) {
    return this.db.object(`/courses/${id}`).valueChanges();
  }
}
