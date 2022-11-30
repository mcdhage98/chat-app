import React, { useContext,useState,useEffect } from "react";
import { connect } from 'react-redux'
import Card from "../Card";
import { ChatWindowContext } from "../../Context/ChatWindowContext";
import SenderChatTile from "../SenderChatTile/SenderChatTile";
import ReceiverChatTile from "../ReceiverChatTile/ReceiverChatTile";
import TextInputBar from "../TextInputBar/TextInputBar";
import "./ChatWindow.css";
import { saveMessage } from "../../Redux/Messages/actions";


function ChatWindow(props) {
  const {loggedInUser} = props;
  console.log(loggedInUser)
  const { chatWindowState } = useContext(ChatWindowContext);
  const {chatWindowNumber } = chatWindowState;
  console.log(chatWindowState)
  const [text, setText] = useState("");
  const [textToBeSent, setTextToBeSent] = useState("");

  useEffect(()=>{
	saveMessage({
		message:textToBeSent,
		sender:`user${chatWindowNumber}`,
		chattingUser:chatWindowNumber
	})
  },[textToBeSent])

  function handleOnEnter(text) {
	setText(text)
    console.log("enter", text);
	setTextToBeSent(text);
  }

  function onClickHandler(){
	console.log(text)
	setTextToBeSent(text)
  }

  const Chats = loggedInUser[`user${chatWindowNumber}Messages`].length>0?
  loggedInUser[`user${chatWindowNumber}Messages`].map((message)=>{
    if(message.sender=='user0')
      return <SenderChatTile key={message.uuid} {...message}/>
    else
      return <ReceiverChatTile key={message.uuid} {...message}/>
  }):<></>

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
        {Chats}
        <TextInputBar text={text} setText={setText} onClickHandler={onClickHandler} handleOnEnter={handleOnEnter} />
      </div>
    </Card>
  );
}

const mapStateToProps = state => {
	return {
	  loggedInUser: state.loggedInUser
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
	  saveMessage: (messagePayload) => dispatch(saveMessage(messagePayload))
	}
  }


  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(ChatWindow)