import { createReducer, on } from "@ngrx/store"
import { Load,Unload } from "./display-state.actions"

/**
 * This sets up the DisplayState, which is one of the states that comprises the app's overall state
 */
export interface DisplayState{
    loading:boolean
}

export const initialAuthState: DisplayState = {
    loading:false
}

export const DisplayStateReducer = createReducer(
    initialAuthState,
    on(Load,state=>{
        return ({...state, loading:true})
    }),
    on(Unload,state=>({...state, loading:false}))
)