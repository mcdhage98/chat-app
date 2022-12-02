import React,{useContext, useMemo, useState} from "react";
import Card from "../Card";
import "./EmailCard.css";
import EmailIcon from "../../assets/svg/EmailIcon";
import UserIcon from "../../assets/svg/UserIcon";
import ArchiveIcon from "../../assets/svg/ArchiveIcon";
import {ChatWindowContext} from "../../Context/ChatWindowContext";
import ChatPersons from "../../Data/ChatPersons";

export default function EmailCard() {
  const { chatWindowState } = useContext(ChatWindowContext);
  const {chatWindowNumber} = chatWindowState;
  const [chatPersons] = useState(ChatPersons);
 


  const person = useMemo(()=>{
    return chatPersons.find(person => person.id == chatWindowNumber);
  },[chatWindowNumber,chatPersons])

  console.log(person);

  function stringAvatar(name) {
    return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
  }

  return (
  person?
    <Card sx={{padding:'20px',display:'flex', flexDirection:"column",alignItems:"center"}}>
      <div className="emailLogo">
        <p className="emailLogoText">{stringAvatar(person.name)}</p>
      </div>
      <div className="emailCardContentLine">
        <EmailIcon />
        <p>{person.email}</p>
      </div>
      <div className="emailCardContentLine">
        <UserIcon />
        <p>{person.name}</p>
      </div>
	  <button className="archiveButton">
		<p>Archive</p>
		<ArchiveIcon/>
	  </button>
    </Card>:<></>
  );
}
