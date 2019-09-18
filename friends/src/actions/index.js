import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS_START });
    axiosWithAuth()
        .get('/friends')
        .then(res => {
            dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err.data });
        });
};