import React, { useState,useContext } from "react";
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
import { Avatar } from "@mui/material";
import Avatars from "../../assets/Images";
import "./ActiveConversationListItem.css";

import { ChatWindowContext, changeAction } from "../../Context/ChatWindowContext";


const CustomizedListItem = ({ list:argList, heading, totalNotifications }) => {
  const [open, setOpen] = useState(false);
  const [list,setList] = useState(argList);
  const handleClick = () => {
    setOpen(!open);
  };

  const {chatWindowDispatch } = useContext(ChatWindowContext);

  const setListClickHandler = (id)=>{
		let newList = list.map((person)=>{
			if(person.id == id) person.selected=true;
			else person.selected = false;
			return person;
		})
		setList(newList)
		chatWindowDispatch(changeAction(id));
  }

  return (
    <div className="customCollapsibleList">
      <ListItemButton
        sx={{ display: "flex", justifyContent: "space-between", height:"3rem" , borderRadius:"5px"}}
        disableGutters={true}
        onClick={handleClick}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <p className="listMenu">{heading}</p>
          <NumberBadge notifications={totalNotifications} />
        </Box>

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="li" disablePadding>
          {list.map((person) => {
            return (
              <ListItemButton
                key={person.id}
                sx={{ display: "flex", justifyContent: "space-between", height:"3.5rem" }}
				selected={person.selected}
				onClick ={()=> setListClickHandler(person.id)}
              >
                <Box  sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <ListItemIcon>
                    <Avatar
                      alt={person.name}
                      src={Avatars[`Avatar${person.id}`]}
                      sx={{ width: 40, height: 40 }}
                    />
                  </ListItemIcon>
                  <p className="listPerson" key={person.id}>
                    {person.name}
                  </p>
                </Box>
                <NumberBadge notifications={person.notifications} active/>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};

export default CustomizedListItem;
