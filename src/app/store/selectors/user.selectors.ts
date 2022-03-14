import { createFeatureSelector } from "@ngrx/store";
import { User } from "src/app/model/user.model";

export const selectUser = createFeatureSelector<User>('user');
export const selectUserName = ( state: User ) => state.userName;