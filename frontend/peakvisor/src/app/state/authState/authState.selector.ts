import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectAuthState = (state:AppState)=>state.authState;
export const selectAuthenticated = createSelector(selectAuthState,(state)=>state.authenticated)