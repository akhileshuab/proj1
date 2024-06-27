import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  isFormSubmitted: boolean = false;
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  constructor(private authService: AuthService, private router: Router) {}

  getSignUpData() {
    const isFormValid = this.signupForm.valid;
    const signUpFormValue = this.signupForm.value;
    console.log("reactive_form", signUpFormValue);

    if (isFormValid) {
      this.authService.signUp(signUpFormValue).subscribe({
        next: (data) => {
          console.log(data, "data from signup component.ts");
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        error: (error) => {
          console.error('Error signing up:', error);
        }
      });
      this.isFormSubmitted = true;
    } else {
      console.log("Form is invalid. Please check your inputs.");
    }
  }
}
