import { Component, Inject, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service.service';


@Component({
  selector: 'battle-option-list',
  templateUrl: './battle-option-list.component.html',
  styleUrls: ['./battle-option-list.component.css']
})
export class BattleOptionListComponent implements OnInit {
  battleOptions: any;
  constructor(@Inject(HttpService) private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getDemoBattleOptions().subscribe(
    (response) => { this.battleOptions = response; },
    (error) => { console.log(error); });
  }

}