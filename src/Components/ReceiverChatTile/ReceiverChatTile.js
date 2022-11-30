import React from 'react';
import OnlineAvatarBadge from '../OnlineAvatarBadge/OnlineAvatarBadge';
import './ReceiverChatTile.css';

export default function ReceiverChatTile(){
	return(
		<div>
		<div className="receiverChatTile">
		<OnlineAvatarBadge/>
			<p className="receiverChatText">
				Hello how r u
			</p>
			<p className="receiverChatDate">9 hr ago</p>
			
			
		</div>
		</div>
	)
}