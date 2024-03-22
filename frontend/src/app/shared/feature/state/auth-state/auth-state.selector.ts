import { createSelector } from "@ngrx/store";
import { AppState } from "../app-state/app.state";

export const SelectAuthState = (state:AppState)=>state.authState;
export const SelectAuthenticated = createSelector(SelectAuthState,(state)=>state.authenticated)
export const SelectUserId = createSelector(SelectAuthState,(state)=>state.userId)
export const SelectAccessToken = createSelector(SelectAuthState,(state)=>state.access_token)
export const SelectRefreshToken = createSelector(SelectAuthState,(state)=>state.refresh_token)