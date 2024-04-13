import { createAction } from "@ngrx/store";
/**
 * This is the actions to change the state of the display state. This will determine if a loading page is shown.
 */
export const Load = createAction('[displayState Component] load');
export const Unload = createAction('[displayState Component] unload');