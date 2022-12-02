import React from 'react';
import './OnboardClients.css';
import SendMail from '../../assets/svg/SendMailIcon.js';
import Card from '../Card.js';
import LinkIcon from '../../assets/svg/LinkIcon.js';

export default function OnboardClients(){
	return(
		<Card sx={{marginTop:"20px", position:"relative",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
			<div className="sendMail">
			<SendMail/>
			</div>
			<p className="onboardClientsHeader">Onboard Clients</p>
			<p>Share the link with prospects and discuss all stuff</p>
			<button className="linkButton">
				<p>Copy Link</p>
				<LinkIcon/>
			</button>
			
		</Card>
	)
}