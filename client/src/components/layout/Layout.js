import React from "react";
import {
  AppBar,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
} from "@material-ui/core";
import routes from "../../routes";
import styles from "./Layout.styles";

const Layout = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography>Datanorm-Manager</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List className={classes.drawerList}>
          {routes.map((route) => {
            if (!route.link) return null;
            return (
              <ListItem
                button
                component="a"
                href={route.link.to}
                key={route.link.to}
              >
                <ListItemIcon>
                  <route.link.icon />
                </ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography component="div">{children}</Typography>
      </main>
    </div>
  );
};

export default Layout;
