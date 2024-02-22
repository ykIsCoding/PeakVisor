import { createReducer, on } from "@ngrx/store"
import { login, logout } from "./authState.actions"


export interface AuthState{
    authenticated:boolean
}

export const initialAuthState: AuthState = {
    authenticated:false
}

export const authStateReducer = createReducer(
    initialAuthState,
    on(login,state=>{
        console.log(state)
        return ({...state, authenticated:true})
    }),
    on(logout,state=>({...state, authenticated:false}))
)