import React from "react";
import "./ActiveCard.css";
import Card from "../Card";
import Avatar from "@mui/material/Avatar";
import Avatar0 from "../../assets/Images/Avatar0.jpg";
import SettingsIcon from "../../assets/svg/SettingsIcon";
import Switch from "../Switch/Switch";

export default function ActiveCard() {
  return (
    <Card>
      <div className="activeCardWrapper">
        <Avatar alt="Remy" src={Avatar0} sx={{ width: 80, height: 80 }} />
        <div className="userNameWrapper">
          <p className="userName">Bill BradFord</p>
          <SettingsIcon />
        </div>
		<p className="userNameJob">Lead UX/UI designer</p>
		<Switch/>
      </div>
    </Card>
  );
}
