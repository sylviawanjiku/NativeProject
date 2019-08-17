import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../constants/actionTypes";

const initialState = {
  isRegistered: false,
  isLoading: false,
  errors: {},
  user: {}
};

const registration = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, isLoading: true, isRegistered: false };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        isLoading: false,
        errors: {},
        user: action.newUser.data
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        isLoading: false,
        errors: action.error.response.data,
        user: {}
      };


    default:
      return state;
  }
};
export default registration;
