import React,{useState} from "react";
import "./TextInputBar.css";
import InputEmoji from "react-input-emoji";
import RightArrow from "../../assets/svg/RightArrow";
import AttachIcon from "../../assets/svg/AttachIcon";

export default function TextInputBar() {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div className="inputEmojiWrapper">
		<AttachIcon/>
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Enter Your Message Here"
		borderRadius="5px"
      />
	  <button className="sendButton">
		<p>Send</p>
		<RightArrow/>
		</button>
    </div>
  );
}
