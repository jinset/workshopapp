import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})
export class RecoveryComponent implements OnInit {
  recoverForm: FormGroup;

  constructor(private authService: AuthService, private location: Location) { }

  ngOnInit(): void {
    this.recoverForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit(): void {
    this.authService.forgotPassword(this.recoverForm.value).subscribe(recover => {
      console.log(recover);
    },
    (errors: any): void => {
      console.log(errors);
    }
    );
    this.recoverForm.reset();
  }

  goBack(): void {
    this.location.back();
  }
}
