import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../productservice';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;
  i = 0;
  teams: string[]=[];
  cricketTeam: string[] = ['Dhoni', 'Raydu', 'Jadeja', 'Virat']
  footballTeam: string[] = ['Ronaldo', 'Beckhem', 'Messi', 'Nemar']
  stopSwitch: any;
  stopSwitchStatus = true;
  alreadyswitching:boolean=false ;
 TWD='twdb';

  constructor(private route: ActivatedRoute, private router: Router, private _data: ProductService) {
    
    this.route.params.subscribe((res: any) => console.log(res));
  }



  SwitchTeams() {
    
    
    this.stopSwitch = setInterval(() => {
      if (this.i % 2 == 0) {
        this.teams = this.cricketTeam;
      } else {
        this.teams = this.footballTeam;
      }
      this.i++;
    }, 1000)
    this.stopSwitchStatus = false;
    this.alreadyswitching=true;
}

  StopSwitchTeams() {
    clearInterval(this.stopSwitch);
    this.stopSwitchStatus = true;
    this.alreadyswitching=false;
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.teams=this.cricketTeam;
  }
  tohome() {
    this.router.navigate([''])
  }
} 