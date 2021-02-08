import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </Link>
        </ListItem>

        <ListItem button key="about">
          <Link to="/about">
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="ABOUT" />
          </Link>
        </ListItem>

        <ListItem button key="projects">
          <Link to="#">
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="PROJECTS" />
          </Link>
        </ListItem>

        <ListItem button key="courses">
          <Link to="#">
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="COURSES" />
          </Link>
        </ListItem>

        <ListItem button key="resources">
          <Link to="#">
            <ListItemIcon>
              <BlurOnIcon />
            </ListItemIcon>
            <ListItemText primary="RESOURCES" />
          </Link>
        </ListItem>

        <ListItem button key="career">
          <Link to="#">
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="CAREER" />
          </Link>
        </ListItem>

        <ListItem button key="blogs-and-news">
          <Link to="#">
            <ListItemIcon>
              <AirplayIcon />
            </ListItemIcon>
            <ListItemText primary="BLOGS & NEWS" />
          </Link>
        </ListItem>

        <ListItem button key="login-register">
          <Link to="#">
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary="LOGIN / REGISTER" />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="navbarSmall">
      <div className="nav-brand">
        <img src={Logo} alt="CodewithSudeep Logo" />
      </div>

      <div className="nav-links">
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
