import {
    FETCHING_FRIENDS_START,
    FETCHING_FRIENDS_SUCCESS
} from "../actions";
  
const initialState = {
    friends: [],
    isFetching: false,
    error: ""
};
  
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS_START:
            return {
            ...state,
            isFetching: true,
            error: ""
            };
        case FETCHING_FRIENDS_SUCCESS:
            return {
            ...state,
            isFetching: false,
            friends: action.payload
            };
        default:
            return state;
    }
};