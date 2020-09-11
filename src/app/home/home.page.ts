import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { UserInterface} from '../interfaces/interfaces';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  spacesList = [];

  user = this.authService.getUser();

  constructor(private authService: AuthService, private homeService: HomeService) { }

  ngOnInit(): void{
    this.homeService.getSpacesAndSpotsByUserId(this.user).subscribe(data => {
      console.log(data)
    });
  }

}
