import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service.service';


@Component({
  selector: 'battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  battleGrid : any;
  constructor(@Inject(HttpService) private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getDemoBattle().subscribe(
    (response) => { this.battleGrid = response; },
    (error) => { console.log(error); });
  }

}