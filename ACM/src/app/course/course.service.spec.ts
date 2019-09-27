import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

describe('CourseService', () => {
  let service: CourseService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),

    ],
    providers: [
      
    ]
  }));

  beforeEach(() => {
    service  = TestBed.get(CourseService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return courses', () => {
    let courses;
    // spyOn(service, 'getCourses').and.returnValue(of([]));
    
    service.getCourses()
           .subscribe(
             data => {
               courses = data
             }
           );
    expect(courses).toBeUndefined();
  });

  it('should return course', () => {
    let course;
    service.getCourse(1)
           .subscribe(
             data => course = data
           )
      expect(course).toBeUndefined();
  })



});
