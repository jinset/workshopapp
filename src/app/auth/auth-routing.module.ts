import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { RecoveryComponent } from './recovery/recovery.component';
import { ChangeComponent } from './change/change.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'recovery',
    component: RecoveryComponent
  },
  {
    path: 'change',
    component: ChangeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
