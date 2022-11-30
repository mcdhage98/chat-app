import React,{useReducer} from "react";
import "./ChatPage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../../Components/Card";
import ChatAppIcon from "../../Components/ChatAppIcon/ChatAppIcon";
import ActiveCard from "../../Components/ActiveCard/ActiveCard";
import CustomizedListItem from "../../Components/CustomizedListItem/CustomizedListItem";
import ChatList from "../../Components/ActiveConversationsList/ActiveConversationsList";
import ArchivedConversation from "../../Components/ArchivedConversation/ArchivedConversation";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";

import { ChatWindowContext,chatWindowReducer } from "../../Context/ChatWindowContext";


const chatWindowInitialState = {
  chatWindowNumber:1
}

const ChatPage = () => {
  const[chatWindowState, chatWindowDispatch] = useReducer(chatWindowReducer,chatWindowInitialState)
  return (
    <ChatWindowContext.Provider value={{chatWindowState,chatWindowDispatch}}>
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      <Grid className="gridWrapper" container spacing={2}>
        <Grid lg={3} sm={6} xs={12} order={{ xs: 1, lg: 1 }} sx={{minHeight:'100vh'}}>
          <div className="quickChatHeader">
            <ChatAppIcon />
            <h5 className="appName">QuickChat</h5>
          </div>
          <ActiveCard/>
          {/*<CustomizedListItem/>*/}
          <ChatList/>
          <ArchivedConversation/>
        </Grid>
        <Grid lg={6} sm={12} xs={12} order={{ xs: 3, lg: 2 }}>
          <ChatWindow/>
        </Grid>
        <Grid lg={3} sm={6} xs={12} order={{ xs: 2, lg: 3 }}>
          <Card>xs=4</Card>
        </Grid>
      </Grid>
    </Box>
    </ChatWindowContext.Provider>
  );
};

export default ChatPage;
