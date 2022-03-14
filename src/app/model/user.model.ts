import { Pokemon } from "./pokemon.model";

export interface User {
    id: number;
    userName: string;
    isLoggedIn: boolean;
    party: Pokemon[];
}