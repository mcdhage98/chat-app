import React, { useState } from "react";
import List from "@mui/material/List";
import "./ActiveConversationsList.css";
import CustomizedListItem from "../CustomizedListItem/CustomizedListItem";
import ActiveConversationListItem from "../ActiveConversationListItem/ActiveConversationListItem";



export default function ChatList() {
  const chatPersons = [
    {
      id:1,
	  name:'Henry Boyd',
	  notifications:0,
	  selected:false
    },
	{
		id:2,
		name:'Martha Curtis',
		notifications:2,
		selected:false
	},
	{
		id:3,
		name:'Philip Tucker',
		notifications:0,
		selected:false,
	},{
		id:4,
		name:'Christine Reid',
		notifications:0,
		selected:false
	},
	{
		id:5,
		name:'Jerry Guzzmen',
		notifications:0,
		selected:false
	},{
		id:6,
		name:'Russel Williams',
		notificationsL: 0,
		selected:false
	}
  ];
  return (
    <div>
      <List component="nav" aria-labelledby="nested-list-subheader">
          <ActiveConversationListItem list={chatPersons} totalNotifications={4} heading="Active Converations"/>
      </List>
    </div>
  )
}
