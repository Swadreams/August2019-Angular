import { TestBed } from '@angular/core/testing';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireAction } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';

import { CourseService } from './course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('CourseService', () => {
  let service: CourseService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      HttpClientTestingModule,

      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig)
    ]
  }));

  beforeEach(()=> {
    service = TestBed.get(CourseService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shlould return coures from repository', ()=> {
      let spy = spyOn(service, 'getCourses1').and.callThrough();
      let data = null;
      service.getCourses1()
             .subscribe(
               response => data = response
             );
      expect(spy).toHaveBeenCalled();
  });

  it('shlould return coures from firebase', ()=> {
      let spy = spyOn(service, 'getCourses').and.callThrough();
      let data = null;
      service.getCourses()
             .subscribe(
               response => data = response
             );
      expect(spy).toHaveBeenCalled();
  });

  it('shlould return coures from firebase', ()=> {
      let spy = spyOn(service, 'getCourse').and.callThrough();
      let data = null;
      service.getCourse(1)
             .subscribe(
               response => data = response
             );
      expect(spy).toHaveBeenCalledWith(1);
  });

  it('shlould return updated course from firebase', ()=> {
      let obj = {};
      let id = 1;
      let spy = spyOn(service, 'udpateCourse').and.callThrough();
      let data = null;
      service.udpateCourse(obj, id)
             .then(
               response => data = response
             );
      expect(spy).toHaveBeenCalledWith(obj, id);
  });

  it('should add course to database', ()=> {
    let obj = {};
    let spy = spyOn(service, 'addCourse').and.callThrough();
    let data = null;
    service.addCourse(obj)
           .then(
             response => data = response
           );
    expect(spy).toHaveBeenCalledWith(obj);
  });

  it('should delete course from database', ()=> {
    let id = 1;
    let spy = spyOn(service, 'deleteCourse').and.callThrough();
    let data = null;
    service.deleteCourse(id)
           .then(
             response => data = response
           );
    expect(spy).toHaveBeenCalledWith(id);
  });

});
