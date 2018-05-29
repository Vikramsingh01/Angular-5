import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { FormGroup, Form, FormControl ,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  userList: user[] = [];
  form:FormGroup;

  addUser() {
   // var user: user;
    //user=form.value;
   // this.userList.push(user);
  //  console.log(form.value);
    console.log(this.form.value);
  }

  constructor() { }

  ngOnInit() {
    this.form= new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      contact: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(12),Validators.minLength(10)]),
      email: new FormControl('',[Validators.required])
    })
  }

}
