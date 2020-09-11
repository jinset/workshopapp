import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user;
  listOptionGeneral = [
    { name: 'Comunicados y Boletines' },
    { name: 'Informacion del condominio' },
    { name: 'Administracion de inquilinos' },
    { name: 'Estado de cuenta' }
  ];

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.authService.getUser();
  }

  async closeModal(): Promise<void> {
    await this.modalCtrl.dismiss();
  }

  async logout(): Promise<void> {
    this.authService.cleanUser();
    this.closeModal();
    this.router.navigate(['/auth']);
  }
}
