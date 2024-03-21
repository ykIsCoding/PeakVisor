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
    on(Login,(state,props)=>{
        const {token_manager} = props
        return ({...state,refresh_token:token_manager.refresh_token,access_token:token_manager.access_token,...props,authenticated:true})
    }),
    on(Logout,state=>({refresh_token:'',access_token:'',authenticated:false}))
)