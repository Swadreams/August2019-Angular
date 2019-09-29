import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './admin/auth.service';
import { of, throwError } from 'rxjs';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  let fixture;
  let component: AppComponent;
  let auth: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterModule.forRoot([
          {path: 'home', component: AppComponent}
        ])
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    auth = TestBed.get(AuthService);
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ACM'`, () => {
    expect(component.title).toEqual('ACM');
  });


  it('should show header bar if user is logged in', () => {
      let obj: any = {
        user: true
      }
      spyOn(auth, 'isLoggedIn').and.returnValue(of(obj));
      component.ngOnInit();
      expect(component.isLoggedIn).toBe(true);
  });

  it('should hide header bar if user is not logged in', () => {
      let obj: any = null;
      spyOn(auth, 'isLoggedIn').and.returnValue(of(obj));
      component.ngOnInit();
      expect(component.isLoggedIn).toBeFalsy();
  });

  it('should log error in console if error occured', ()=> {
      spyOn(auth, 'isLoggedIn').and.returnValue(throwError('error'));
      component.ngOnInit();
      expect(component.isLoggedIn).toBeFalsy();
  })

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ACM app is running!');
  // });
});
