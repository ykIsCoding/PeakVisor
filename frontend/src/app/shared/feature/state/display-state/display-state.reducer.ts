import { createReducer, on } from "@ngrx/store"
import { Load,Unload } from "./display-state.actions"


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