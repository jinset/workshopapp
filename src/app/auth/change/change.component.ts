import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  changeForm: FormGroup;
  email: string;
  isPasswordSame = true;
  constructor(
    private authService: AuthService,
    private routerActivated: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    routerActivated.queryParams.subscribe(email => {
      this.email = email['email'];
    });
  }

  checkPasswords(group: FormGroup) {
    const pass: string = group.get('password').value;
    const confirmPassword: string = group.get('confirmPassword').value;
    return pass === confirmPassword ? null : { notSame: true };
  }

  ngOnInit() {
    this.changeForm = new FormGroup(
      {
        password: new FormControl(null, [Validators.required]),
        confirmPassword: new FormControl(null, [Validators.required])
      },
      { validators: this.checkPasswords }
    );
  }

  onSubmit() {
    const user = {
      email: this.email,
      password: this.changeForm.value.password
    };
    this.authService.changePassword(user).subscribe(
      () => {
        this.router.navigate(['auth']);
      },
      (errors: any) => {
        console.log(errors);
      }
    );
    this.changeForm.reset();
  }

  goBack(): void {
    this.location.back();
  }
}
