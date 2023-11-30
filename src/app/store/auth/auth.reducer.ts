import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/dashboard/pages/users/models";
import { authActions } from "./auth.actions";

export const authFeatureName = 'auth';

export interface State {
    authUser: User | null;
}

const initialState: State = {
    authUser: null,
}

export const reducer = createReducer(initialState, on(authActions.setAuthUser, (state, { data }) => ({
    ...state, authUser: data, })),
    
        on(authActions.clearState, () => initialState)
    )
