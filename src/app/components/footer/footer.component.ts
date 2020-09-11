import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';

import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() disabledHome = false;
  @Input() disabledAdd = false;

  private modal: HTMLIonModalElement;
  private openMenu = false;
  private actionSheet: HTMLIonActionSheetElement;
  private dataSheet = {
    header: 'Quiero: ',
    cssClass: 'action-sheet-footer',
    buttons: [
      {
        text: 'Realizar una reservación',
        icon: 'arrow-forward-outline',
        handler: (): void => {
          this.goRoute(`/booking/add`);
        }
      },
      {
        text: 'Realizar una autorización',
        icon: 'arrow-forward-outline',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Realizar una solicitud',
        icon: 'arrow-forward-outline',
        handler: () => {}
      }
    ]
  };
  constructor(
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private router: Router
  ) {}

  presentModal(): void {
    if (this.openMenu) {
      this.openMenu = false;
      this.closeModal();
    } else {
      this.openMenu = true;
      this.showModal();
    }
  }

  async showModal(): Promise<void> {
    this.modal = await this.modalController.create({
      component: MenuComponent,
      cssClass: 'menu-modal',
      showBackdrop: true,
      backdropDismiss: false
    });
    return await this.modal.present();
  }

  async closeModal(): Promise<boolean> {
    return await this.modal.dismiss();
  }

  async presentActionSheet(): Promise<void> {
    switch (this.router.url) {
      case '/booking':
        this.goRoute(`${this.router.url}/add`);
        break;

      default:
        this.actionSheet = await this.actionSheetController.create(
          this.dataSheet
        );
        this.actionSheet.present();
    }
  }

  goRoute(route: string): void {
    this.router.navigate([route]);
  }
  goHome(): void {
    if (this.openMenu) {
      this.closeModal();
    }
    this.router.navigate(['/home']);
  }
}
