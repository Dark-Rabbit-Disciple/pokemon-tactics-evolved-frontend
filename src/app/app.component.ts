import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http-service.service';
import { Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import { selectUser } from './store/selectors/user.selectors';
import { User } from './model/user.model';
import { LogOut } from './store/actions/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon-Tactics-Evolved';
  battleGrid : any;
  constructor(@Inject(HttpService) private httpService: HttpService, private store: Store<AppState>) { }

  user!: User;

  ngOnInit() {
    this.httpService.getDemoBattle().subscribe(
    (response) => { this.battleGrid = response; },
    (error) => { console.log(error); });

    this.store.select(selectUser).subscribe(data => {
      this.user = data;
    })
  }

  logOut(){
    this.store.dispatch(LogOut())
  }
}
