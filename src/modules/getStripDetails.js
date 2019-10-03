import ActionTypes from '../utility/actionTypes';
import DataOption from '../utility/dataOptions';

export function getStripDetails() {
    return (dispatch) => {
        let stripPayload, type;
          type = ActionTypes.FETCH_STRIP_DATA;
        stripPayload =  DataOption.STRIP_DATA;
        dispatch({
            stripPayload,
            type
        });

    }
}

export default function reducer(state = {
    fetching: false,
    stripPayload: []
}, action) {
    switch (action.type) {
        case ActionTypes.FETCH_STRIP_DATA: {
            return {
                ...state,
                type: action.type,
                stripPayload: action.stripPayload,
            };
        }
    }
    return state;
}
