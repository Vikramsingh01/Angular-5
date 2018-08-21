import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!!';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDB0u4EI4JAIETI3QuSuphbGpfveOSrbzY",
      authDomain: "udmey-ng-http.firebaseapp.com"
    });
  }
}
