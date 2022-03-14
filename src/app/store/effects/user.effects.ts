import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "src/app/service/http-service.service";
import { GetPokemonParty, GetPokemonPartySuccess, Login, LoginComplete } from "../actions/user/user.actions";
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';


@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private httpService: HttpService){}

    login$ = createEffect(() :any => {
        return this.actions$.pipe(
            ofType(Login), 
            switchMap(action => {
                return this.httpService.login(action.userName, action.password)
            }),
            switchMap(res => [
                LoginComplete({user: res}),
                GetPokemonParty({user: res})
            ])
        );
    });

    getPokemonParty$ = createEffect(() :any => {
        return this.actions$.pipe(
            ofType(GetPokemonParty), 
            mergeMap((action): any => {
                return this.httpService.getPokemonParty(action.user.id).pipe(map((data) => {
                    return GetPokemonPartySuccess({party: data})
                }))
            })
        );
    });
}