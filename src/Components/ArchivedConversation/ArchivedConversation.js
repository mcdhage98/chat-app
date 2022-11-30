import React, { useState } from "react";
import List from "@mui/material/List";
import CustomizedListItem from "../CustomizedListItem/CustomizedListItem"



export default function ArchivedConversation() {
  const chatPersons = [
    {
      id:1,
	  name:'Henry Boyd',
	  notifications:0
    }
  ];
  return (
    <div>
      <List component="nav" aria-labelledby="nested-list-subheader">
          <CustomizedListItem list={chatPersons} totalNotifications={7} heading="Archived Conversations"/>;
      </List>
    </div>
  );
}
