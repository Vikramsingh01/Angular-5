import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  private basrUrl: string = 'http://localhost:3000/products';
  constructor(private http: Http) { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
  getlistItems(){
    return this.http.get(this.basrUrl);
  }
 addItem(item) {
  return this.http.post(this.basrUrl, item);
}
 cancelBtn(){
   return this.http.get(this.basrUrl)
 }
deleteItem(id) {
  return this.http.delete(this.basrUrl+"/"+id);
}
getItem(id) {
  return this.http.get(this.basrUrl+"/"+id);
}
updateItem(item, id) {
  return this.http.put(this.basrUrl+"/"+id, item);
}

}