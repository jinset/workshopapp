import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'booking',
    loadChildren: './booking/booking.module#BookingPageModule'
  },
  {
    path: 'authorization',
    loadChildren: './authorization/authorization.module#AuthorizationPageModule'
  },
  {
    path: 'request',
    loadChildren: './request/request.module#RequestPageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
  {
    path: 'notification',
    loadChildren: './notification/notification.module#NotificationPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
