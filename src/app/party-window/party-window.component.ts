import { Component, Inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/service/http-service.service';
import { Pokemon } from '../model/pokemon.model';
import { User } from '../model/user.model';
import { selectUser } from '../store/selectors/user.selectors';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'party-window',
  templateUrl: './party-window.component.html',
  styleUrls: ['./party-window.component.css']
})
export class PartyWindowComponent implements OnInit {
  user!: User;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(data => {
      this.user = data;
    })
  }

}