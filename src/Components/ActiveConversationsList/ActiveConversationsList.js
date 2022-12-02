import React, { useState } from "react";
import List from "@mui/material/List";
import "./ActiveConversationsList.css";
import CustomizedListItem from "../CustomizedListItem/CustomizedListItem";
import ActiveConversationListItem from "../ActiveConversationListItem/ActiveConversationListItem";
import chatPersons from "../../Data/ChatPersons";



export default function ChatList() {
  return (
    <div>
      <List component="nav" aria-labelledby="nested-list-subheader">
          <ActiveConversationListItem list={chatPersons} totalNotifications={4} heading="Active Converations"/>
      </List>
    </div>
  )
}
