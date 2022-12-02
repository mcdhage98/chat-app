import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "../Card";
import { ChatWindowContext } from "../../Context/ChatWindowContext";
import SenderChatTile from "../SenderChatTile/SenderChatTile";
import ReceiverChatTile from "../ReceiverChatTile/ReceiverChatTile";
import TextInputBar from "../TextInputBar/TextInputBar";
import "./ChatWindow.css";
import { fetchMessage, saveMessage } from "../../Redux/Messages/actions";

function ChatWindow(props) {
  const { loggedInUser, saveMessage, fetchMessage } = props;
  const { chatWindowState } = useContext(ChatWindowContext);
  const { chatWindowNumber } = chatWindowState;
  const [text, setText] = useState("");
  const [textToBeSent, setTextToBeSent] = useState("");

  useEffect(() => {
    if (textToBeSent)

      saveMessage({
        message: textToBeSent,
        sender: `user0`,
        chattingUser: `user${chatWindowNumber}`,
      });
    fetchMessage({ chattingUser: `user${chatWindowNumber}` });
  }, [textToBeSent]);

  function handleOnEnter(text) {
    setText(text);
    console.log("enter", text);
    setTextToBeSent(text);
  }

  function onClickHandler() {
    setTextToBeSent(text);
    console.log(text);
    setText("");
  }

  const Chats =
    loggedInUser[`user${chatWindowNumber}Messages`].length > 0 ? (
      loggedInUser[`user${chatWindowNumber}Messages`].map((message) => {
        if (message.sender == "user0")
          return <SenderChatTile key={message.uuid} {...message} />;
        else return <ReceiverChatTile key={message.uuid} {...message} chatWindowNumber={chatWindowNumber}/>;
      })
    ) : (
      <></>
    );

  return (
    <Card
      sx={{
        height:"135vh",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        overflowY:"scroll",
        paddingTop:"5px"
      }}
    >
      {/*chatWindowState.chatWindowNumber */}
      <div>
        {Chats}
        <TextInputBar
          text={text}
          setText={setText}
          onClickHandler={onClickHandler}
          handleOnEnter={handleOnEnter}
        />
      </div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveMessage: (messagePayload) => dispatch(saveMessage(messagePayload)),
    fetchMessage: ({ chattingUser }) =>
      dispatch(fetchMessage({ chattingUser })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
