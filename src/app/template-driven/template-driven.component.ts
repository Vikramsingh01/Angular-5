import { Component, OnInit } from '@angular/core';
import { user } from '../user';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  userList: user[]=[];
  addUser(form) {


    var user: user;
    user=form.value;
    this.userList.push(user);
    console.log(form.value);
  }
  constructor() { }
  ngOnInit() {
  }

}
