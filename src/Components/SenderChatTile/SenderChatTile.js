import React from 'react';
import OnlineAvatarBadge from '../OnlineAvatarBadge/OnlineAvatarBadge';
import './SenderChatTile.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)


const timeAgo = new TimeAgo('en-US')

export default function SenderChatTile({message,time}){
	return(
		<div>
		<div className="senderChatTile">
			<p className="senderChatText">
				{message}
			</p>
			<p className="senderChatDate">{time?timeAgo.format(time):''}</p>
			<OnlineAvatarBadge avatarNumber={0}/>
			
		</div>
		</div>
	)
}