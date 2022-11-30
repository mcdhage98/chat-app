import React,{useState} from "react";
import "./TextInputBar.css";
import InputEmoji from "react-input-emoji";
import RightArrow from "../../assets/svg/RightArrow";
import AttachIcon from "../../assets/svg/AttachIcon";

export default function TextInputBar({text,handleOnEnter,setText, onClickHandler}) {
  
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
	  <button className="sendButton" onClick={onClickHandler}>
		<p>Send</p>
		<RightArrow/>
		</button>
    </div>
  );
}
