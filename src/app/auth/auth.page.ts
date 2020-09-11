import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  signinForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  on() {
    console.log("test")
  }

  onSubmit(): void {
    this.authService.login(this.signinForm.value).subscribe(user => {
        this.authService.setUser(user);
        this.router.navigate(['/home']);
        this.signinForm.reset();
      },
      (errors: any) => {
        if (errors.error.code == 405) {
          this.router.navigate(['auth/change'], {
            queryParams: { email: this.signinForm.value.email }
          });
        } else {
          console.log(errors);
        }
      }
    );
  }
}
