import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  companyName: string = "MegaNexus";
  imgUrl: string = "../../assets/images/angular.png";
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onLogout(){
    this.authService.logout();
  }
}
