import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(msj: string, duration: number = 2000): Promise<void> {
    const toast: HTMLIonToastElement = await this.toastController.create({
      position: 'top',
      message: msj,
      duration: duration
    });
    toast.present();
  }
}
