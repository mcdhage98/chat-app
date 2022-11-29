import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Card = styled(Paper)(({ theme }) => ({
	backgroundColor: '#e7ebf0',
	padding: theme.spacing(1),
	textAlign: 'center',
	boxShadow: '0px 0px'
  }));


  export default Card;