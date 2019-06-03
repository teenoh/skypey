import { SET_TYPING_VALUE, SEND_MESSAGE, SET_ACTIVE_USER_ID } from "../constants/action-types";

const initialState = {
    number: null,
    value: "",
    userId: null,
}

const typing = (state=initialState, action) => {
  switch (action.type) {
    case SET_TYPING_VALUE:
      let { number, value, userId } = action.payload;
      return {
        ...state,
        number,
        value,
        userId
      };

    case SEND_MESSAGE:
    case SET_ACTIVE_USER_ID:
      return {
        ...state,
        value: "",
        number: null
      };

    default:
      return state;
  }
};

export default typing;
