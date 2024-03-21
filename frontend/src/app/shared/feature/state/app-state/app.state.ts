import { AuthState } from "../auth-state/auth-state.reducer";
import { DisplayState } from "../display-state/display-state.reducer";

export interface AppState{
    authState:AuthState;
    displayState:DisplayState
}