import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { ToastService } from '../shared/toast.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  user = this.authService.getUser();
  imagePath: string = '/assets/profile-img.svg';
  constructor(
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  btnSave(event): void {
    this.toastService.presentToast('Se ha guardado los datos');
  }
}
