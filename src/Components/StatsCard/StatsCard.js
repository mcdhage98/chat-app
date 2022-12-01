import React from 'react';
import './StatsCard.css';
import Card from '../Card';
import ClockIcon from '../../assets/svg/ClockIcon';

export default function StatsCard({statColor, statName, statValue, StatIcon}){
	return(
		<div className={`statsCard stat${statColor}tertiary`}>
			<div className={`iconContainer stat${statColor}secondary`}>
			<StatIcon/>
			</div>
			<div className="statDescription">
			<p className={`statValue stat${statColor}primary `}>{statValue}</p>
			<p className='statName'>{statName}</p>
			</div>
		</div>
	)
}