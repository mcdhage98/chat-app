import React from 'react';
import OnlineAvatarBadge from '../OnlineAvatarBadge/OnlineAvatarBadge';
import './SenderChatTile.css';

export default function SenderChatTile(){
	return(
		<div>
		<div className="senderChatTile">
			<p className="senderChatText">
				Hello how r u
			</p>
			<p className="senderChatDate">9 hr ago</p>
			<OnlineAvatarBadge/>
			
		</div>
		</div>
	)
}