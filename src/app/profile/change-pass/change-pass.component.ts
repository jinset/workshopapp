import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';
import { UserInterface } from '../../interfaces/interfaces';
import { ToastService } from '../../shared/toast.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  user = this.authService.getUser();
  changeForm: FormGroup;
  isPasswordSame = true;
  actualPass = '';
  passwordTypeInput = 'password';

  constructor(
    private authService: AuthService,
    private location: Location,
    private toastService: ToastService
  ) {}

  checkPasswords(group: FormGroup): any {
    const pass: string = group.get('newPassword').value;
    const confirmPassword: string = group.get('confirmPassword').value;
    return pass === confirmPassword ? null : { notSame: true };
  }

  ngOnInit(): void {
    this.changeForm = new FormGroup(
      {
        newPassword: new FormControl(null, [Validators.required]),
        confirmPassword: new FormControl(null, [Validators.required])
      },
      { validators: this.checkPasswords }
    );

    this.actualPass = this.user.password;
  }

  togglePasswordMode(event): void {
    event.el.type = event.el.type === 'text' ? 'password' : 'text';
  }

  onSubmit(): void {
    if (this.changeForm.valid) {
      this.authService
        .changePassword({
          email: this.user.email,
          password: this.changeForm.value.newPassword
        })
        .subscribe(
          () => {
            this.location.back();
          },
          (errors: any) => {
            this.toastService.presentToast('Ha ocurrido un error');
          }
        );
    }
  }
}
