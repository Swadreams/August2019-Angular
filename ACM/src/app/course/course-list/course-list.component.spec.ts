import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireAction } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { CourseListComponent } from './course-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { StarComponent } from 'src/app/shared/star/star.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { of, throwError } from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let element;
  let router;
  let courseService: CourseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CourseListComponent,
        StarComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    router = TestBed.get(Router);
    courseService = TestBed.get(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show image by default', () => {
     let button = element.querySelector('button');
     button.click();
     expect(component.imageVisible).toBeTruthy();
  });

  it('should show course details', () => {
    let spy = spyOn(router, 'navigate').and.returnValue(true);
    component.showCourseDetails(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should show message once clicked on rating', () => {
    component.ratingRecieved('hello');
    expect(component.message).toBe('hello');
  });

  it('should show courses on ', () => {
      let obj: AngularFireAction<any> = {
        payload:{
        val: function() {
          return {
            "courseCode":"ZIDOX-00",
            "courseId":0,
            "courseName":"Angular 10",
            "description":"Irure labore magna nostrud dolor aliqua exercitation non est amet tempor anim irure sit amet. Occaecat deserunt ex officia elit quis commodo commodo excepteur laborum sint. Elit ullamco consectetur ullamco laborum ut et. Culpa sunt ex anim ad.\r\n",
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

  it('should log error message in console if error throw during course request', () => {
    spyOn(courseService, 'getCourses').and.returnValue(throwError('error'));
    component.ngOnInit();
    expect(component.courses).toBeUndefined()
  })

});
