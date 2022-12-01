import React from "react";
import Card from "../Card";
import "./EmailCard.css";
import EmailIcon from "../../assets/svg/EmailIcon";
import UserIcon from "../../assets/svg/UserIcon";
import ArchiveIcon from "../../assets/svg/ArchiveIcon";

export default function EmailCard() {
  function stringAvatar(name) {
    return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
  }

  return (
    <Card sx={{padding:'20px',display:'flex', flexDirection:"column",alignItems:"center"}}>
      <div className="emailLogo">
        <p className="emailLogoText">{stringAvatar("Henry Boyd")}</p>
      </div>
      <div className="emailCardContentLine">
        <EmailIcon />
        <p>henryboyd@gmail.com</p>
      </div>
      <div className="emailCardContentLine">
        <UserIcon />
        <p>Henry Boyd</p>
      </div>
	  <button className="archiveButton">
		<p>Archive</p>
		<ArchiveIcon/>
	  </button>
    </Card>
  );
}
