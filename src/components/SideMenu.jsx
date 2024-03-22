import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Send, MoveToInbox } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function SideMenu() {
  const listItems = [
    { text: "Inbox", icon: MoveToInbox, path:'/inbox' },
    { text: "Sent", icon: Send, path:'/sent' },
  ];

  const navigate = useNavigate()
  return (
    <div className="p-3">
      <List>
        {listItems.map((item) => (
          <ListItem className="mb-3" disablePadding>
            <ListItemButton onClick={()=>navigate(item.path)}>
              <ListItemIcon>{<item.icon />}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "GrayText" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* {listItems.map((c) => (
        <p>{c.text}</p>
      ))} */}
    </div>
  );
}

export default SideMenu;
