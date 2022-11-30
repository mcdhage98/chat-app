import { v4 as uuidv4 } from "uuid";

import {
  FETCH_MESSAGE_FAILURE,
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  SAVE_MESSAGE,
} from "./types";

const initialState = {
  messageLoading: false,
  error: "",
  user1Messages: [
    {
      sender: "user1",
      message: "Hi",
      time: new Date(),
      uuid: uuidv4(),
    },
    {
      sender: "user0",
      message: "How are you",
      time: new Date(),
      uuid: uuidv4(),
    },
  ],
  user2Messages: [
    {
      sender: "user2",
      message: "Hi",
      time: new Date(),
      uuid: uuidv4(),
    },
    {
      sender: "user2",
      message: "How are you",
      time: new Date(),
      uuid: uuidv4(),
    },
  ],
  user3Messages: [],
  user4Messages: [],
  user5Messages: [],
  user6Messages: [],
};

const reducer = (state = initialState, { type, payload, chattingUser }) => {
  let messageKey;
  switch (type) {
    case FETCH_MESSAGE_REQUEST:
      return {
        ...state,
        messageLoading: true,
      };
    case FETCH_MESSAGE_SUCCESS:
      messageKey = `${chattingUser}Messages`;
      return {
        ...state,
        messageLoading: false,
        error: "",
        [messageKey]: { ...state[messageKey], payload },
      };
    case FETCH_MESSAGE_FAILURE:
      return {
        ...state,
        messageLoading: false,
        error: "error",
      };
    case SAVE_MESSAGE:
      messageKey = `${chattingUser}Messages`;
      return {
        ...state,
        messageLoading: false,
        error: "",
        [messageKey]: { ...state[messageKey], payload },
      };
    default:
      return state;
  }
};

export default reducer;
