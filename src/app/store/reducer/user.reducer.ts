import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/model/user.model";
import { GetPokemonPartySuccess, LoginComplete, LogOut } from "../actions/user/user.actions";

export const initialState: User = {
    id: -1,
    userName: "",
    isLoggedIn: false,
    party: []
}

export const userReducer = createReducer(
    initialState,
    on(LoginComplete, (state: User, {user}) => ({...state, userName: user.userName, id: user.id, isLoggedIn: true})),
    on(GetPokemonPartySuccess, (state: User, {party}) => ({...state, party: party})),
    on(LogOut, () => ({id: -1, userName: "", isLoggedIn: false, party: []}))
)