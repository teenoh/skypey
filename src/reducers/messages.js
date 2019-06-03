import _ from "lodash";
import { getMessages } from "../static-data";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";

const messages = (state = getMessages(10), action) => {
  let number, value, userId, allUserMsgs;
  switch (action.type) {
    case SEND_MESSAGE:
      console.log(action);
      number = action.payload.number;
      value = action.payload.value;
      userId = action.payload.userId;
      allUserMsgs = state[userId];
      const messageNumber = number || +_.keys(allUserMsgs).pop() + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [messageNumber]: {
            number: messageNumber,
            text: value,
            is_user_msg: true
          }
        }
      };

    case DELETE_MESSAGE:
      userId = action.payload.userId;
      number = action.payload.number;
      allUserMsgs = state[userId];
      console.log(allUserMsgs);
      delete allUserMsgs[number]

      return {
        ...state,
        [userId]: {
          ...allUserMsgs
        }
      };

    default:
      return state;
  }
};

export default messages;
