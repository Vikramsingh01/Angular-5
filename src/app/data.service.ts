import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  private basrUrl: string = 'http://localhost:5555/products';
  constructor(private http: Http) { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
  getlistItems(){
    return this.http.get(this.basrUrl);
  }

}