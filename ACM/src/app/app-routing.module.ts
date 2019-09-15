import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { LoginComponent } from './admin/login/login.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { AuthGuard } from './shared/auth.guard';


const Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'courses/details/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] },
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
