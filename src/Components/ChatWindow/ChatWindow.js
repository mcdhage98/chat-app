import React,{useContext} from 'react';
import Card from '../Card';
import { ChatWindowContext } from '../../Context/ChatWindowContext';

export default function ChatWindow(){
	const {chatWindowState} =  useContext(ChatWindowContext);
	return(
		<div>
		<Card>{chatWindowState.chatWindowNumber}</Card>
		</div>
	)
}