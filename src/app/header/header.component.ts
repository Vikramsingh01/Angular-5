import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  companyName: string = "MegaNexus";
  imgUrl: string = "../../assets/images/angular.png";
  constructor() { }

  ngOnInit() {
  }

}
