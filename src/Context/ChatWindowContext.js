import React,{createContext } from "react";

const ChatWindowContext = createContext();

const chatWindowReducer = (state,action)=>{
	switch(action.type){
		case 'change':
			return {...state,chatWindowNumber:action.payload};
		default: return state;
	}
}


export { ChatWindowContext, chatWindowReducer}