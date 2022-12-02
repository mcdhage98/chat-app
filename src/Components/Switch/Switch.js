import React from "react";
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './Switch.css'




const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 28,
	height: 16,
	padding: 0,
	display: 'flex',
	cursor:'pointer',
	'&:active': {
	  '& .MuiSwitch-thumb': {
		width: 15,
	  },
	  '& .MuiSwitch-switchBase.Mui-checked': {
		transform: 'translateX(9px)',
	  },
	},
	'& .MuiSwitch-switchBase': {
	  padding: 2,
	  '&.Mui-checked': {
		transform: 'translateX(12px)',
		color: '#fff',
		'& + .MuiSwitch-track': {
		  opacity: 1,
		  backgroundColor: '#0f4cff',
		},
	  },
	},
	'& .MuiSwitch-thumb': {
	  boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
	  width: 12,
	  height: 12,
	  borderRadius: 6,
	  transition: theme.transitions.create(['width'], {
		duration: 200,
	  }),
	},
	'& .MuiSwitch-track': {
	  borderRadius: 16 / 2,
	  opacity: 1,
	  backgroundColor:
		theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
	  boxSizing: 'border-box',
	},
  }));

  export default function MySwitch(){
	return(
		<FormControlLabel
          value="end"
          control={<AntSwitch />}
          label="Active"
          labelPlacement="end"
		  sx={{
			marginLeft:'10px',
		  }}
        />
	)
  }