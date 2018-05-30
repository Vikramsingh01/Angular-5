import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DataserviceService]
})
export class ListComponent implements OnInit {
  itemReceived: string[]=[''];

  getItemFromServiceClass(){
    this.itemReceived = this.dataservice.getItems();
    console.log(this.itemReceived);
  }

  addNewItem ( form:any ){
console.log(form.value.itemName);
this.dataservice.addItems(form.value.itemName);
  }

  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
  }

}
