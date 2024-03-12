import { createReducer, on } from "@ngrx/store"
import { Login, Logout } from "./auth-state.actions"


export interface AuthState{
    authenticated:boolean
}

export const initialAuthState: AuthState = {
    authenticated:false
}

export const AuthStateReducer = createReducer(
    initialAuthState,
    on(Login,state=>{
        console.log(state)
        return ({...state, authenticated:true})
    }),
    on(Logout,state=>({...state, authenticated:false}))
)