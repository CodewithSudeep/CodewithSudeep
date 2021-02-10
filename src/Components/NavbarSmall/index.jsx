import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

import Logo from "../../Images/Logo.webp";

// ui components
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BusinessIcon from "@material-ui/icons/Business";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ClassIcon from "@material-ui/icons/Class";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AirplayIcon from "@material-ui/icons/Airplay";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const useStyles = makeStyles({
  list: {
    width: 320,
  },
  fullList: {
    width: "auto",
  },
});

export default function NavbarSmall() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="navbarSmall-list">
        <ListItem button key="logo">
          <img
            src={Logo}
            alt="CodewtihSudeep"
            style={{
              width: "40vw",
              margin: "0 auto 10px auto",
            }}
          />
        </ListItem>
        <Divider />
        <ListItem button key="home">
          <NavLink to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </NavLink>
        </ListItem>

        <ListItem button key="about">
          <NavLink to="/about">
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="ABOUT" />
          </NavLink>
        </ListItem>

        <ListItem button key="projects">
          <NavLink to="#">
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="PROJECTS" />
          </NavLink>
        </ListItem>

        <ListItem button key="courses">
          <NavLink to="#">
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="COURSES" />
          </NavLink>
        </ListItem>

        <ListItem button key="resources">
          <NavLink to="#">
            <ListItemIcon>
              <BlurOnIcon />
            </ListItemIcon>
            <ListItemText primary="RESOURCES" />
          </NavLink>
        </ListItem>

        <ListItem button key="career">
          <NavLink to="#">
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="CAREER" />
          </NavLink>
        </ListItem>

        <ListItem button key="blogs-and-news">
          <NavLink to="#">
            <ListItemIcon>
              <AirplayIcon />
            </ListItemIcon>
            <ListItemText primary="BLOGS & NEWS" />
          </NavLink>
        </ListItem>

        <ListItem button key="login-register">
          <NavLink to="#">
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary="LOGIN / REGISTER" />
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="navbarSmall">
      <div className="nav-brand">
        <img src={Logo} alt="CodewithSudeep Logo" />
      </div>

      <div className="nav-NavLinks">
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
    </div>
  );
}
