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
import { of } from 'rxjs';

describe('AppComponent', () => {

  let fixture;
  let app: AppComponent;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
      ],
      imports: [
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        BrowserAnimationsModule
      ],
    }).compileComponents();
  }));

  beforeEach(()=> {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    authService = TestBed.get(AuthService);
  })

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ACM'`, () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ACM');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ACM app is running!');
  // });

  // it('should show header if user is already logged in ', () => {
  //    spyOn(authService, 'isLoggedIn').and.callFake(()=> of())
  //    app.ngOnInit();
  //    expect(app.isLoggedIn).toBeFalsy();
  // })
});
