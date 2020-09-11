import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { ChangePassComponent} from './change-pass/change-pass.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'change-pass',
    component: ChangePassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
