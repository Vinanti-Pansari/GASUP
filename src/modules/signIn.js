import Constants from '../utility/constant';
import ActionType from '../utility/actionTypes';
import DataOptions from '../utility/dataOptions';
import { errorHandler } from './errorHandler';

export function signIn(data) {
    return (dispatch) => {
        dispatch({
            error: null,
            signInPayload: null,
            type: ActionType.SIGN_IN_REQUEST
        });
        if(data.email.trim() === DataOptions.VALID_EMAIL && data.password === DataOptions.VALID_PASSWORD){
                dispatch({
                    error: null,
                    signInPayload: data.email,
                    type: ActionType.SIGN_IN_SUCCESS
                });
            }
            else {
                dispatch({
                    error: Constants.LOGIN_FAILED,
                    signInPayload: null,
                    type: ActionType.SIGN_IN_FAIL
                });
            alert(Constants.LOGIN_FAILED)
            }
    }
}


export default function reducer(state = {
    fetching: false,
    signInPayload: null
}, action) {
    switch (action.type) {
        case ActionType.SIGN_IN_REQUEST: {
            return {
                ...state,
                fetching: true,
            };
        }
        case ActionType.SIGN_IN_SUCCESS: {
            return {
                ...state,
                fetching: false,
                signInPayload: action.signInPayload,
            };
        }
        case ActionType.SIGN_IN_FAIL: {
            return {
                ...state,
                fetching: false,
                //error: action.error,
            };
        }
        default: {
            return state;
        }
    }
}