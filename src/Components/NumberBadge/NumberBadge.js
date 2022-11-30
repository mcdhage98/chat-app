// import Paper from '@mui/material/Paper';
// import { Badge } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { shouldForwardProp } from '@mui/styled-engine';

// const CustomBadge = styled(Badge,{
// 	shouldForwardProp :(props) => props.name!=='active'
// })(({ theme,active }) => ({
// 	backgroundColor: '#e7ebf0',
// 	padding: theme.spacing(1),
// 	textAlign: 'center',
// 	boxShadow: '0px 0px',
// 	'& .MuiBadge-badge':{
// 		backgroundColor:active?'#fc5655':'#f3f6fb'
// 	}

//   }));

//   export default function NumberBadge(){
// 	return(
// 		<CustomBadge badgeContent={4} active/>
// 	)
//   }

import "./NumberBadge.css";
export default function NumberBadge({ active, notifications }) {
  if (notifications > 0)
    return (
      <div className={`numberBadge ${active ? "active" : ""}`}>
        <span>{notifications}</span>
      </div>
    );
}
