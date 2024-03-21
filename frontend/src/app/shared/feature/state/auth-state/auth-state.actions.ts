import { createAction, props } from "@ngrx/store";

export const Login = createAction('[authState Component] login', props<Object|any>());
export const Logout = createAction('[authState Component] logout');