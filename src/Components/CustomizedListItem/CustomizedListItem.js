import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import NumberBadge from "../NumberBadge/NumberBadge";
import "./CustomizedListItem.css";

const CustomizedListItem = ({ doc }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="customCollapsibleList">
      <ListItemButton sx={{display:'flex', justifyContent:'space-between'}} disableGutters={true} key={doc.Id} onClick={handleClick}>
            <p className="listMenu">Active Conversations   {<NumberBadge/>}</p>

          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse key={doc.Sheets.Id} in={open} timeout="auto" unmountOnExit>
        <List component="li" disablePadding key={doc.Id}>
          {doc.Sheets.map((sheet) => {
            return (
              <ListItemButton key={sheet.Id}>
                <ListItemIcon>
                  {/* <InsertDriveFileTwoToneIcon /> */}
                </ListItemIcon>
                <ListItemText key={sheet.Id} primary={sheet.Title} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};

export default function CategoriesResults() {
  const docs = [
    {
      id: 1,
      Sheets: [
        {
          id: 1,
          title: "one",
        },
      ],
    },
  ];
  return (
    <div>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {docs.map((doc) => {
          return <CustomizedListItem key={doc.id} doc={doc} />;
        })}
      </List>
    </div>
  );
}
