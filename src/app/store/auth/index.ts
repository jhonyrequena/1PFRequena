import { ActionReducerMap } from "@ngrx/store";
import { authFeatureName, reducer as authReducer, State as AuthState } from "./auth.reducer";


export interface appState {
    [authFeatureName]: AuthState;
}
export const appReducer: ActionReducerMap<appState> = {
    [authFeatureName]: authReducer,
}