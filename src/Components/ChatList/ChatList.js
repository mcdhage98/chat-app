import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Divider } from "@mui/material";
import NumberBadge from "../NumberBadge/NumberBadge";
import {Avatar} from "@mui/material";
import Avatars from '../../assets/Images';
import "./ChatList.css";

const CustomizedListItem = ({ list }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="customCollapsibleList">
      <ListItemButton sx={{display:'flex', justifyContent:'space-between'}} disableGutters={true}  onClick={handleClick}>
		<Box sx={{display:'flex', justifyContent:'flex-start',alignItems:'center'}}>
            <p className="listMenu">Active Conversations</p>
			<NumberBadge/>
		</Box>

          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="li" disablePadding>
          {list.map((person) => {
            return (
              <ListItemButton key={person.id}>
                <ListItemIcon>
				  <Avatar alt="Remy" src={Avatars[`Avatar${person.id}`]} sx={{ width: 50, height: 50 }} />
                </ListItemIcon>
                <p className="listPerson"key={person.id}>{person.name} </p>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};

export default function CategoriesResults() {
  const chatPersons = [
    {
      id:1,
	  name:'Henry Boyd',
	  notifications:0
    },
	{
		id:2,
		name:'Martha Curtis',
		notifications:2
	},
	{
		id:3,
		name:'Philip Tucker',
		notifications:0
	},{
		id:4,
		name:'Christine Reid',
		notifications:0
	},
	{
		id:5,
		name:'Jerry Guzzmen',
		notifications:0
	},{
		id:6,
		name:'Russel Williams',
		notificationsL: 0
	}
  ];
  return (
    <div>
      <List component="nav" aria-labelledby="nested-list-subheader">
          <CustomizedListItem list={chatPersons} />;
      </List>
    </div>
  );
}
