import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import StoreIcon from "@mui/icons-material/Store";
import ForumIcon from "@mui/icons-material/Forum";
// import AssistantIcon from "@mui/icons-material/Assistant";
import Face4 from "@mui/icons-material/Face4";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Nurture Nest{" "}
    </ListSubheader>
    <ListItemButton
      onClick={() => {
        window.location.replace("https://aitalk.in/");
      }}
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton
      onClick={() => {
        window.location.replace("https://aitalk.in/community");
      }}
    >
      <ListItemIcon>
        <ForumIcon />
      </ListItemIcon>
      <ListItemText primary="Community" />
    </ListItemButton>
    <ListItemButton
      onClick={() => {
        window.location.replace("https://aitalk.in/store");
      }}
    >
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText primary="Store" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon
        onClick={() => {
          window.location.replace("https://aitalk.in/avatar");
        }}
      >
        <Face4 />
      </ListItemIcon>
      <ListItemText primary="Aria AI" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssistantIcon />
      </ListItemIcon>
      <ListItemText primary="Chatbot" />
    </ListItemButton> */}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton
      onClick={() => {
        window.location.replace("https://aitalk.in/about");
      }}
    >
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItemButton>

    {/* <ListItemButton>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItemButton> */}
    <ListItemButton
      onClick={() => {
        window.location.replace("https://aitalk.in/login");
      }}
    >
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
