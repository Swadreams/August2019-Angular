import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { LoginComponent } from './admin/login/login.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { AuthGuard } from './shared/auth.guard';
import { SignupComponent } from './admin/signup/signup.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { CourseDetailsAdvanceComponent } from './course/course-details/course-details-advance/course-details-advance.component';
import { CourseDetailsBasicComponent } from './course/course-details/course-details-basic/course-details-basic.component';
import { CourseDetailsResolver } from './course/course-details/course-details.resolver.service';


const Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard]},
  { path: 'courses/details/:id', component: CourseDetailsComponent, canActivate: [AuthGuard],
    resolve: {resolvedData: CourseDetailsResolver},
    children: [
      { path: '', redirectTo: 'basic', pathMatch: 'full'},
      { path: 'basic', component: CourseDetailsBasicComponent},
      { path: 'advance', component: CourseDetailsAdvanceComponent},
    ]
  },
  { path: 'courses/edit/:id', component: EditCourseComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ]
})
export class AppRoutingModule { }
