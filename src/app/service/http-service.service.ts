import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { catchError, map } from 'rxjs/operators';
import { UserEffects } from 'src/app/store/effects/user.effects';
import { UserActionTypes } from 'src/app/store/actions/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private getDemoBattleUrl = 'https://localhost:44361/battledemo/getGeneratedDemoMap';
  private getDemoBattleOptionsUrl = 'https://localhost:44361/battleoption/getAllBattleOptions';
  private loginUrl = 'https://localhost:44361/auth/login';

  constructor(private http: HttpClient) { }

  getDemoBattle() {
    return this.http.get(this.getDemoBattleUrl);
  }

  login(userName: string, password: string): Observable<User>{
    const formData = new FormData();
    formData.append("username", userName);
    formData.append("password", password);
    return this.http.post(this.loginUrl, formData).pipe(
      map((data) => {
        const user: any = { ...data };
        return user
      }),
      catchError( (error: any) => {
        // todo: log?
        if (error.status == 500) {
            alert('Invalid Username/Password Combination')
        }
        
        return new Observable<User>();
    })
    )
  }

  getPokemonParty(userId: number){
    const getPokemonPartyUrl: string = `https://localhost:44361/pokemon/getPokemonByParty/${userId}`;
    return this.http.get<any[]>(getPokemonPartyUrl);
  }

  getDemoBattleOptions(){
    return this.http.get<any[]>(this.getDemoBattleOptionsUrl)
  }
}
