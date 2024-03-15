import { createSelector } from "@ngrx/store";
import { AppState } from "../app-state/app.state";

export const SelectAuthState = (state:AppState)=>state.authState;
export const SelectAuthenticated = createSelector(SelectAuthState,(state)=>state.authenticated)