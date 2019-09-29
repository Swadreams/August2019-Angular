import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireAction } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { CourseListComponent } from './course-list.component';
import { StarComponent } from 'src/app/shared/star/star.component';
import { environment } from 'src/environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseService } from '../course.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseService: CourseService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      declarations: [ 
        CourseListComponent,
        StarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    courseService = TestBed.get(CourseService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show image on click of show image button', ()=> {
      component.showImage();
      expect(component.imageVisible).toBeTruthy();
  });

  it('should show message on rating clicked', () => {
    let msg = 'Hi';
    component.ratingRecieved(msg);
    expect(component.message).toBe(msg);
  });

  it('should show courses on initialisation of component', () => {

    let obj: AngularFireAction<any> = {
      payload:{
      val: function() {
        return {
          "courseCode":"ZIDOX-00",
          "courseId":0,
          "courseName":"Angular 10",
          "description":"BADAF",
          "imageUrl":"https://angular.io/assets/images/logos/angular/angular.png",
          "nextBatchDate":"08-01-2019",
          "price":4679.76,
          "starRating":3.6,
          "trainer":"Ellis Hester",
        }
      },
      },
      "type":"value",
      "prevKey":null,
      "key":"0"
    }

    spyOn(courseService, 'getCourses').and.returnValue(of([obj]));
    component.ngOnInit();
    expect(component.courses.length).toBe(1);
  });

  it('should log an error in case get courses throw error', ()=> {
      spyOn(courseService, 'getCourses').and.returnValue(throwError('error'));
      component.ngOnInit();
      expect(component.courses).toBeUndefined();
  });

  it('should navigate to course details screen', ()=> {
      let nav = spyOn(router, 'navigate').and.stub();
      component.showCourseDetails(1);
      expect(nav).toHaveBeenCalled();
  });

});
