/* eslint-disable */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

function Navbarmenu() {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (e) => {
    setActiveItem(e.target.id);
    localStorage.setItem("activeNavItem", e.target.id);
  };

  useEffect(() => {
    const storedItem = localStorage.getItem("activeNavItem");
    if (storedItem) {
      setActiveItem(storedItem);
    }
  }, []);

  return (
    <Navbar className="NavMenu" expand="lg" variant="light">
      <div className="NavItemDiv">
        <Link
          className={`NavItems ${activeItem === "home" ? "active" : ""}`}
          href="/"
          id="home"
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          className={`NavItems ${activeItem === "news" ? "active" : ""}`}
          href="/News"
          id="news"
          onClick={handleClick}
        >
          News
        </Link>
        <Link
          className={`NavItems ${activeItem === "ebook" ? "active" : ""}`}
          href="/Ebook"
          id="ebook"
          onClick={handleClick}
        >
          Ebook
        </Link>
        <Link
          className={`NavItems ${activeItem === "markets" ? "active" : ""}`}
          href="/Markets"
          id="markets"
          onClick={handleClick}
        >
          Markets
        </Link>
        <Link
          className={`NavItems ${activeItem === "blogs" ? "active" : ""}`}
          href="/Blogs"
          id="blogs"
          onClick={handleClick}
        >
          Blogs
        </Link>
        <Link
          className={`NavItems ${activeItem === "portfolio" ? "active" : ""}`}
          href="/Portfolio"
          id="portfolio"
          onClick={handleClick}
        >
          Portfolio
        </Link>
        <div className="dropdown">
          <Link
            className={`NavItems Ext ${
              activeItem === "aboutus" ? "active" : ""
            }`}
            href="/AboutUs"
            id="aboutus"
            onClick={handleClick}
          >
            About-Us
          </Link>
          <div className="dropdown-content">
            <Link href="/PrivacyPolicy">Privacy Policy</Link>
            <Link href="/TermAndConditions">Term & Conditions</Link>
            <Link href="/Disclaimer">Disclaimer</Link>
          </div>
        </div>
        <Link
          className={`NavItems Ext ${
            activeItem === "contactus" ? "active" : ""
          }`}
          href="/ContactUs"
          id="contactus"
          onClick={handleClick}
        >
          Contact-Us
        </Link>
      </div>
      <div className="IconPack mr-5">
        <div className="container-2">
          <FontAwesomeIcon className="Icons icon" icon={faSearch} />
          <input type="search" id="search" placeholder="Search..." />
        </div>
        <FontAwesomeIcon className="Icon" icon={faBell} />
      </div>
    </Navbar>
  );
}

export default Navbarmenu;

// import Link from "next/link";
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawer: {
//     width: 240,
//   },
//   drawerPaper: {
//     width: 240,
//   },
// }));

// function Navbar() {
//   const classes = useStyles();
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const handleDrawerOpen = () => {
//     setOpenDrawer(true);
//   };

//   const handleDrawerClose = () => {
//     setOpenDrawer(false);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             My App
//           </Typography>
//           <div className="NavItemDiv">
//             <Link legacyBehavior  href="/" passHref>
//               <a className="NavItems">Home</a>
//             </Link>
//             <Link legacyBehavior  href="/News" passHref>
//               <a className="NavItems">News</a>
//             </Link>
//             <Link legacyBehavior  href="/Ebook" passHref>
//               <a className="NavItems">Ebook</a>
//             </Link>
//             <Link legacyBehavior  href="/Markets" passHref>
//               <a className="NavItems">Markets</a>
//             </Link>
//             <Link legacyBehavior  href="/Blogs" passHref>
//               <a className="NavItems">Blogs</a>
//             </Link>
//             <Link legacyBehavior  href="/Portfolio" passHref>
//               <a className="NavItems">Portfolio</a>
//             </Link>
//             <div className="dropdown">
//               <a className="NavItems Ext">About-Us</a>
//               <div className="dropdown-content">
//                 <Link legacyBehavior  href="/PrivacyPolicy" passHref>
//                   <a>Privacy Policy</a>
//                 </Link>
//                 <Link legacyBehavior  href="/TermAndConditions" passHref>
//                   <a>Term & Conditions</a>
//                 </Link>
//                 <Link legacyBehavior  href="/Disclaimer" passHref>
//                   <a>Disclaimer</a>
//                 </Link>
//               </div>
//             </div>
//             <Link legacyBehavior  href="/ContactUs" passHref>
//               <a className="NavItems Ext">Contact-Us</a>
//             </Link>
//           </div>
//           <div className="IconPack mr-5">
//             <div className="container-2">
//               <FontAwesomeIcon className="Icons icon" icon={faSearch} />
//               <input type="search" id="search" placeholder="Search..." />
//             </div>
//             <FontAwesomeIcon className="Icon" icon={faBell} />
//           </div>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="left"
//         open={openDrawer}
//         onClose={handleDrawerClose}
//         classes={{ paper: classes.drawerPaper }}
//       >
//         <List>
//           <ListItem button>
//             <ListItemIcon>
//               <MenuIcon />
//             </ListItemIcon>
//             <ListItemText primary="Menu Item 1" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon>
//               <MenuIcon />
//             </ListItemIcon>
//             <ListItemText primary="Menu Item 2" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </div>
//   );
// }

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
// } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faBell, faBars } from "@fortawesome/free-solid-svg-icons";

// import MenuIcon from "@material-ui/icons/Menu";
// import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   overrides: {
//     MuiAppBar: {
//       root: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         height: '50px',
//         backgroundColor: '#010b2c',
//         borderRadius: '30px',
//       },
//     },
//     MuiButton: {
//       root: {
//         textTransform: 'uppercase',
//         fontWeight: 600,
//         fontSize: '2vw',
//         padding: '0 1.5vw',
//         color: 'white',
//         '&:hover': {
//           backgroundColor: 'transparent',
//           color: '#000',
//           '&::before': {
//             transform: 'scaleY(1)',
//             opacity: 1,
//           },
//           '&::after': {
//             transform: 'scaleY(1)',
//             opacity: 1,
//           },
//         },
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           borderTop: '2px solid #262626',
//           borderBottom: '2px solid #262626',
//           transform: 'scaleY(2)',
//           opacity: 0,
//           transition: '0.3s',
//           zIndex: 1,
//         },
//         '&::after': {
//           content: '""',
//           position: 'absolute',
//           top: '0px',
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'white',
//           transform: 'scale(0)',
//           opacity: 0,
//           transition: '0.3s',
//           zIndex: -1,
//         },
//       },
//     },
//   },
// });

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: "center",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//     marginLeft: theme.spacing(2),
//     "&:hover": {
//       textDecoration: "underline",
//     },
//   },
//   list: {
//     width: drawerWidth,
//   },
//   listItemText: {
//     fontSize: "1.2rem",
//   },
//   navbar: {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     height: 50,
//     backgroundColor: "#010b2c",
//     [theme.breakpoints.up("md")]: {
//       justifyContent: "flex-end",
//     },
//   },
//   navbarContainer: {
//     margin: "2%",
//   },
//   NavItemDiv: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     maxWidth: "100%",
//     justifyContent: "flex-start",
//     [theme.breakpoints.up("md")]: {
//       listStyle: "none",
//       display: "flex",
//       marginLeft: "14rem",
//     },
//   },
//   navItems: {
//     textAlign: "center",
//     padding: "0 1rem",
//     color: "white",
//     whiteSpace: "nowrap",
//     fontWeight: 600,
//     fontSize: "2vw",
//     textDecoration: "none",
//     flexWrap: "wrap",
//     [theme.breakpoints.up("md")]: {
//       position: "relative",
//       display: "block",
//       display: "flex",
//       flexWrap: "wrap",
//       textTransform: "uppercase",
//       margin: "20px 0",
//       padding: "10px 20px",
//       textDecoration: "none",
//       color: "white",
//       fontFamily: "sans-serif",
//       fontSize: 14,
//       fontWeight: 600,
//       transition: ".5s",
//       zIndex: 1,
//     },
//     "&:before": {
//       content: '""',
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderTop: "2px solid #262626",
//       borderBottom: "2px solid #262626",
//       transform: "scaleY(2)",
//       opacity: 0,
//       transition: ".3s",
//       [theme.breakpoints.up("md")]: {
//         content: "none",
//       },
//     },
//     "&:after": {
//       content: '""',
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundColor: "white",
//       transform: "scale(0)",
//       opacity: 0,
//       transition: ".3s",
//       zIndex: -1,
//       [theme.breakpoints.up("md")]: {
//         content: "none",
//       },
//     },
//     "&:hover": {
//       color: "#000",
//       [theme.breakpoints.up("md")]: {
//         "&:before": {
//           transform: "scaleY(1)",
//           opacity: 1,
//         },
//         "&:after": {
//           transform: "scaleY(1)",
//           opacity: 1,
//         },
//       },
//     },
//   },
//   buttonContainer: {
//     [theme.breakpoints.down("sm")]: {
//       display: "none",
//     },
//   },
//   ext: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "inline-block",
//     },
//   },
//   iconPack: {
//     display: "flex",
//     alignItems: "center",
//   },
//   icons: {
//     marginRight: 20,
//   },
// }));

// function Navbar() {
//   const classes = useStyles();
//   const [activeItem, setActiveItem] = useState("");
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const handleClick = (e) => {
//     setActiveItem(e.target.id);
//     localStorage.setItem("activeNavItem", e.target.id);
//   };

//   useEffect(() => {
//     const storedItem = localStorage.getItem("activeNavItem");
//     if (storedItem) {
//       setActiveItem(storedItem);
//     }
//   }, []);

//   const handleDrawerOpen = () => {
//     setOpenDrawer(true);
//   };

//   const handleDrawerClose = () => {
//     setOpenDrawer(false);
//   };

//   return (
//     <div className={classes.navbar}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//             onClick={handleDrawerOpen}
//           >
//             <FontAwesomeIcon icon={faBars} />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             <div className="NavItemDiv">
//               <Link legacyBehavior href="/" passHref>
//                 <a className="NavItems">Home</a>
//               </Link>
//               <Link legacyBehavior href="/News" passHref>
//                 <a className="NavItems">News</a>
//               </Link>
//               <Link legacyBehavior href="/Ebook" passHref>
//                 <a className="NavItems">Ebook</a>
//               </Link>
//               <Link legacyBehavior href="/Markets" passHref>
//                 <a className="NavItems">Markets</a>
//               </Link>
//               <Link legacyBehavior href="/Blogs" passHref>
//                 <a className="NavItems">Blogs</a>
//               </Link>
//               <Link legacyBehavior href="/Portfolio" passHref>
//                 <a className="NavItems">Portfolio</a>
//               </Link>
//               <div className="dropdown">
//                 <a className="NavItems Ext">About-Us</a>
//                 <div className="dropdown-content">
//                   <Link legacyBehavior href="/PrivacyPolicy" passHref>
//                     <a>Privacy Policy</a>
//                   </Link>
//                   <Link legacyBehavior href="/TermAndConditions" passHref>
//                     <a>Term & Conditions</a>
//                   </Link>
//                   <Link legacyBehavior href="/Disclaimer" passHref>
//                     <a>Disclaimer</a>
//                   </Link>
//                 </div>
//               </div>
//               <Link legacyBehavior href="/ContactUs" passHref>
//                 <a className="NavItems Ext">Contact-Us</a>
//               </Link>
//             </div>
//           </Typography>
//           <div className="IconPack mr-5">
//             <div className="container-2">
//               <FontAwesomeIcon className="Icons icon" icon={faSearch} />
//               <input type="search" id="search" placeholder="Search..." />
//             </div>
//             <FontAwesomeIcon className="Icon" icon={faBell} />
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         anchor="left"
//         open={openDrawer}
//         onClose={handleDrawerClose}
//         classes={{ paper: classes.drawerPaper }}
//       >
//         <List className={classes.list}>
//           <Link legacyBehavior href="/" passHref>
//             <ListItem
//               button
//               component="a"
//               id="Home"
//               selected={activeItem === "Home"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="Home"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/News" passHref>
//             <ListItem
//               button
//               component="a"
//               id="News"
//               selected={activeItem === "News"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="News"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/Ebook" passHref>
//             <ListItem
//               button
//               component="a"
//               id="Ebook"
//               selected={activeItem === "Ebook"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="Ebook"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/Markets" passHref>
//             <ListItem
//               button
//               component="a"
//               id="Markets"
//               selected={activeItem === "Markets"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="Markets"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/Blogs" passHref>
//             <ListItem
//               button
//               component="a"
//               id="Blogs"
//               selected={activeItem === "Blogs"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="Blogs"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/Portfolio" passHref>
//             <ListItem
//               button
//               component="a"
//               id="Portfolio"
//               selected={activeItem === "Portfolio"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="Portfolio"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/About-Us" passHref>
//             <ListItem
//               button
//               component="a"
//               id="About-Us"
//               selected={activeItem === "About-Us"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="About-Us"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/Contact-Us" passHref>
//             <ListItem
//               button
//               component="a"
//               id="Contact-Us"
//               selected={activeItem === "Contact-Us"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="Contact-Us"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/Quiz" passHref>
//             <ListItem
//               button
//               component="a"
//               id="Quiz"
//               selected={activeItem === "Quiz"}
//               onClick={handleClick}
//             >
//               <ListItemText
//                 primary="Quiz"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//           <Link legacyBehavior href="/Login" passHref>
//             <ListItem button component="a">
//               <ListItemText
//                 primary="Login/SignUp"
//                 classes={{ primary: classes.listItemText }}
//               />
//             </ListItem>
//           </Link>
//         </List>
//       </Drawer>
//     </div>
//   );
// }
// export default Navbar;
