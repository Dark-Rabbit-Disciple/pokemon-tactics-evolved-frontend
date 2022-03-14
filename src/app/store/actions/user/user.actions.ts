import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/model/pokemon.model';
import { User } from '../../../model/user.model';
export enum UserActionTypes {
 LOGIN = '[User] LOGIN',
 LOGOUT = '[User] LOGOUT',
 GET_POKEMON_PARTY = '[User] GET_POKEMON_PARTY',
 LOGIN_COMPLETE = '[User] LOGIN_COMPLETE',
 LOGIN_ERROR = '[User] LOGIN_ERROR',
}

export const Login = createAction(UserActionTypes.LOGIN, props<{userName: string, password: string}>());
export const LoginComplete = createAction(UserActionTypes.LOGIN_COMPLETE, props<{user: User}>());
export const LogOut = createAction(UserActionTypes.LOGOUT)
export const GetPokemonParty = createAction(UserActionTypes.GET_POKEMON_PARTY, props<{user: User}>());
export const GetPokemonPartySuccess = createAction(UserActionTypes.GET_POKEMON_PARTY, props<{party: any[]}>());