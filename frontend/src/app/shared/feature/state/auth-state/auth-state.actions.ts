import { createAction, props } from "@ngrx/store";
/**
 * This is the actions to change the state of the authstate
 */
export const Login = createAction('[authState Component] login', props<Object|any>());
export const Logout = createAction('[authState Component] logout');