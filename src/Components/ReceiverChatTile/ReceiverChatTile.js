import React from 'react';
import OnlineAvatarBadge from '../OnlineAvatarBadge/OnlineAvatarBadge';
import './ReceiverChatTile.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)


const timeAgo = new TimeAgo('en-US')

export default function ReceiverChatTile({message, time, chatWindowNumber}){
	return(
		<div>
		<div className="receiverChatTile">
		<OnlineAvatarBadge avatarNumber={chatWindowNumber}/>
			<p className="receiverChatText">
				{message}
			</p>
			<p className="receiverChatDate">{time?timeAgo.format(time):''}</p>
			
			
		</div>
		</div>
	)
}