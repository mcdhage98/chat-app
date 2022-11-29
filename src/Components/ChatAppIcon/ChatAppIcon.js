import React from "react";
import Bolt from '../../assets/svg/Bolt';
import ChatCloud from "../../assets/svg/ChatCloud";
import './ChatAppIcon.css'

export default function ChatAppIcon(){
	return(
		<div className="chat-app-icon-wrapper">
			<ChatCloud className="chatCloud"/>
			<Bolt className="bolt"/>
		</div>
	)
}