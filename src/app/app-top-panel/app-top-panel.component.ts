import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-app-top-panel',
  templateUrl: './app-top-panel.component.html',
  styleUrls: ['./app-top-panel.component.scss']
})
export class AppTopPanelComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
