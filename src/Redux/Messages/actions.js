import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE,
  SAVE_MESSAGE,
} from "./types";

export const fetchMessage = () => {
  return (dispatch) => {
    dispatch(fetchMessageRequest());
    let id = Math.floor(Math.random() * 100) + 1;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        // response.data is the users
        const message = response.data;
        dispatch(fetchMessageSuccess(message));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchMessageFailure(error.message));
      });
  };
};

export const fetchMessageRequest = () => {
  return {
    type: FETCH_MESSAGE_REQUEST,
  };
};

export const fetchMessageSuccess = ({ message, chattingUser }) => {
  return {
    type: FETCH_MESSAGE_SUCCESS,
    chattingUser: chattingUser,
    payload: {
      message: message,
      sender: chattingUser,
      time: Date(),
      uuid: uuidv4(),
    },
  };
};

export const fetchMessageFailure = (error) => {
  return {
    type: FETCH_MESSAGE_FAILURE,
    payload: error,
  };
};

export const saveMessage = ({ message, sender, chattingUser }) => {
  return {
    type: SAVE_MESSAGE,
    payload: {
      sender: sender,
      time: new Date(),
      message: message,
      uuid: uuidv4(),
    },
    chattingUser: chattingUser,
  };
};
