import { AuthState } from "../auth-state/auth-state.reducer";
import { DisplayState } from "../display-state/display-state.reducer";
/**
 * This is the main app state that is set up using NgRX state management system
 * This controls the state of the entire application and influences behaviour of the application
 */
export interface AppState{
    authState:AuthState;
    displayState:DisplayState
}