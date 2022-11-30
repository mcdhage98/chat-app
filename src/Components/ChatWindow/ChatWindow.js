import React, { useContext } from "react";
import Card from "../Card";
import { ChatWindowContext } from "../../Context/ChatWindowContext";
import SenderChatTile from "../SenderChatTile/SenderChatTile";
import ReceiverChatTile from "../ReceiverChatTile/ReceiverChatTile";
import TextInputBar from "../TextInputBar/TextInputBar";
import "./ChatWindow.css";

export default function ChatWindow() {
  const { chatWindowState } = useContext(ChatWindowContext);
  return (
    <Card
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
		flexDirection:"column"
      }}
    >
      {chatWindowState.chatWindowNumber}
      <div>
        <SenderChatTile />
        <ReceiverChatTile />
        <TextInputBar />
      </div>
    </Card>
  );
}
