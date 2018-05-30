import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
items: string[]=['Apple','Banana','strawberry'];

getItems(){
return this.items;
}
addItems(item){
   this.items.push(item);
   return this.items;
}

  constructor() { }
}
