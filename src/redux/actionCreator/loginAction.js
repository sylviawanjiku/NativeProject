import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from "../constants/actionTypes"

export const loginUser = loginData => {
    return {
        type:LOGIN_USER,
        loginData
    }
}

export const loginUserSuccess =() => {
    return {
        type:LOGIN_USER_SUCCESS,
        userDetails
    }
}

export const loginUserFailure =() => {
    return {
        type:LOGIN_USER_FAILURE,
        error
    }
}
