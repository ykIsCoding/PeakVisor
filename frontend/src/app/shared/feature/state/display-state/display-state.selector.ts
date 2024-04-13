import { createSelector } from "@ngrx/store";
import { AppState } from "../app-state/app.state";
/**
 * This sets up the selectors of the DisplayState
 */
export const SelectDisplayState = (state:AppState)=>state.displayState;
export const SelectLoading = createSelector(SelectDisplayState,(state)=>{
    return state.loading
})