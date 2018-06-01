import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response, Http } from "@angular/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  items = [];
  date: Date = new Date();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getlistItems().subscribe((response: Response)=>{
      this.items = response.json();
    });}

    delete(id) {
      if(confirm("Sure?")) {
        this.dataService.deleteItem(id).toPromise().then(res=>{
          this.ngOnInit();
        })
      

}}
}