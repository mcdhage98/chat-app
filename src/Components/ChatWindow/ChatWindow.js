import React,{useContext} from 'react';
import Card from '../Card';
import { ChatWindowContext } from '../../Context/ChatWindowContext';
import SenderChatTile from '../SenderChatTile/SenderChatTile';
import ReceiverChatTile from '../ReceiverChatTile/ReceiverChatTile';

export default function ChatWindow(){
	const {chatWindowState} =  useContext(ChatWindowContext);
	return(
		<div>
		<Card>{chatWindowState.chatWindowNumber}
		<SenderChatTile/>
		<ReceiverChatTile/>
		</Card>
		</div>
	)
}