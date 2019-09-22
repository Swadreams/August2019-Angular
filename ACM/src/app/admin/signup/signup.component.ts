import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SpaceValidator } from 'src/app/shared/space.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  successMessage;
  errorMessage;
  error = {};

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  get sForm() {
    return this.form.controls;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [ Validators.required,
                    Validators.email,
                    SpaceValidator.canNotContainSpace]
             ],
      pswd: ['', [Validators.minLength(3), Validators.required]],
    });
  }

  signUp() {
    console.log(this.form);
    this.authService.signup(this.form.value)
        .then(
            response => {
              this.successMessage = "Your account created successfully.";
              console.log(response);
            },
            error => {
              this.errorMessage = error.message;
            }
        )
  }

  validate(controlName) {
    let control = this.sForm[controlName];
    if(!control.pristine && !control.value) {
      this.error[controlName] = `${controlName} is required.`;
    } else if(control.errors && control.errors.space) {
      this.error[controlName] = `${controlName} can not contain space.`;
    } else if(control.errors && control.errors.email) {
      this.error[controlName] = `${controlName} address is invalid.`;
    } else if(control.errors && control.errors.minlength) {
      this.error[controlName] = `${controlName} must contain minimum ${control.errors.minlength.requiredLength} characters.`;
    } else {
      this.error[controlName] = null;
    }
  }

}
