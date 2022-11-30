import React from "react";
import { combineReducers } from 'redux';
import MessageReducer from './reducer'


const rootReducer = combineReducers({
	loggedInUser:MessageReducer
  })
  
  export default rootReducer;