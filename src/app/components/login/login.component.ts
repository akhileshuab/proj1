import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private authService:AuthService,private router:Router){}

  myloginForm=new FormGroup({
    email:new FormControl('',[Validators.required,]),
    password:new FormControl('',[Validators.required,])
  })

  getLoginData() {
    const loginData = this.myloginForm.value;
    const isFormValid = this.myloginForm.valid;

    if (isFormValid) {
      this.authService.login(loginData).subscribe({
        next: (response) => {
          // const user = response.find((u: any) => u.email.trim().toLowerCase() === loginData.email && u.password.trim() === loginData.password);
          console.log(response);
          if (response.email.trim().toLowerCase() === loginData.email && response.password.trim() === loginData.password) {
            // console.log('Login successful',response);
            const user = {
              id: response.id,
              email: response.email
            };
            sessionStorage.setItem('user', JSON.stringify(user));

            this.router.navigate(['dashboard'])
          } else {
            console.log('Invalid email or password');
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      console.log("Form is invalid. Please check your inputs.");
    }
  }
}
