import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,stagger,query,keyframes}from '@angular/animations';
import { ProductService } from '../productservice';
import { BootstrapOptions } from '@angular/core/src/application_ref';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('goals',[
      transition('* => *' , [
        query(':enter' , style({opacity: 0}),{optional: true}),

        query(':enter', stagger('300ms',[
        animate('.7s ease-in', keyframes([
style({opacity: 0,transform: 'translateY(-75%)',offset: 0}),
style({opacity: 0.5,transform: 'translateY(-75%)',offset: 0.3}),
style({opacity: 1,transform: 'translateY(-75%)',offset: 1}),
        ]))]), {optional: true}),

 query(':leave', stagger('300ms',[
        animate('.7s ease-in', keyframes([
style({opacity: 1,transform: 'translateY(0)',offset: 0}),
style({opacity: 0.5,transform: 'translateY(35px)',offset: 0.3}),
style({opacity: 0,transform: 'translateY(-75%)',offset: 1}),
        ]))]), {optional: true})

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
itemCount: number;
btnText: string = 'Add an item';
goalText: string = 'my first goal';
goals = [];
hero: string;
selectedhero:string;
dcHeros: string[]=['batman','superman','spirderman','IronMan'];

color:string;
currentCssClass:string='styleWhite';
inputColor:string='red';
name:string='Click on Change button to change name';
flag:boolean=false;
myStyle:{};
styleToggleFlag:boolean=true;
setStyle() {
  this.myStyle = {
    'font-weight': this.styleToggleFlag ? 'bold' : 'normal',
    'font-size': this.styleToggleFlag ? '24px': '15px',
    'color': this.generateColor()
  }
  this.styleToggleFlag = !this.styleToggleFlag;
}
generateColor() {
  //#ffffff
  this.color = '#';
  var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  for(let i = 0; i<6;i++) {
    this.color += letters[Math.floor(Math.random()*16)];
  }
  return this.color;
}
changeName(){
  if(this.flag==false){
this.name='Rathore';
this.currentCssClass='styleRed'
  }else{
    this.name='Vikram';
    this.currentCssClass='styleWhite'
  }
  console.log(this.name);
  this.flag=!this.flag;
}




sH(hero){
    this.selectedhero=hero;
    console.log(hero);
}
  constructor(private _data: ProductService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
      this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i){
   this.goals.splice(i,1);
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
 
}


