import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from "../constants/actionTypes"

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    errors: {},
    user: {}
};

const logIn = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false
            };
        
        case  LOGIN_USER_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                isLoading: false,

            }
    }
}