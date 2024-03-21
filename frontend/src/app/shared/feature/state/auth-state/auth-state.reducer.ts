import { createReducer, on } from "@ngrx/store"
import { Login, Logout } from "./auth-state.actions"


export interface AuthState{
    authenticated:boolean,
    access_token:string,
    refresh_token:string
}

export const initialAuthState: AuthState = {
    authenticated:true,
    access_token:'',
    refresh_token:''
}

export const AuthStateReducer = createReducer(
    initialAuthState,
    on(Login,state=>{
        return ({...state, authenticated:true})
    }),
    on(Logout,state=>({...state, authenticated:false}))
)