import { createSelector } from "@ngrx/store";
import { AppState } from "../app-state/app.state";

export const SelectDisplayState = (state:AppState)=>state.displayState;
export const SelectLoading = createSelector(SelectDisplayState,(state)=>{
    return state.loading
})