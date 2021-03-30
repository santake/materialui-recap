import React, {useState} from 'react';
import {Link} from 'wouter';
import {
  AppBar, Avatar, Divider,
  Drawer,
  IconButton,
  List,
  ListItem, ListItemAvatar,
  ListItemIcon,
  ListItemText, ListSubheader,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import {ListAlt, Menu as MenuIcon, WebAsset} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  appmenubar: {
    // Increase the Vertical index to the top
    zIndex: 7000
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  drawerList: {
    marginTop: 30,
    width: 300
  }
}));


export const AppMenuBar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (ev) => {
    if (ev.type === 'keydown' && (ev.key === 'Tab' || ev.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const DrawerContent = () => {
    return (
      <div role={'presentation'}
           className={classes.drawerList}
           onClick={toggleDrawer(false)}
           onKeydown={toggleDrawer(false)}>

        <Divider/>
        <List>
          <ListSubheader>Material-UI Various</ListSubheader>
          <Link href={'/'}>
            <ListItem button key={'page1'}>
              <ListItemAvatar>
                <Avatar><WebAsset/></Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Page #1'} secondary={'Layout (e.g. Grid, Flex Box)'}/>
            </ListItem>
          </Link>

          <Link href={'/p2'}>
            <ListItem button key={'page2'}>
              <ListItemAvatar>
                <Avatar><ListAlt/></Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Page #2'} secondary={'Various Form components'}/>
            </ListItem>
          </Link>
          <Link href={'/p3'}>
            <ListItem button key={'page3'}>
              <ListItemAvatar>
                <Avatar><WebAsset/></Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Page #3'} secondary={'Drawer, Menu, Stepper, Toolbar, Paper'}/>
            </ListItem>
          </Link>

          <Link href={'/p4'}>
            <ListItem button key={'page4'}>
              <ListItemAvatar>
                <Avatar><WebAsset/></Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Page #4'} secondary={'Card, Accordions, Dialogs, Snackbar'}/>
            </ListItem>
          </Link>

          <Link href={'/p5'}>
            <ListItem button key={'page5'}>
              <ListItemAvatar>
                <Avatar><WebAsset/></Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Page #5'} secondary={'Tabs, Progress bar/circle, Backdrop'}/>
            </ListItem>
          </Link>

          <Link href={'/p6'}>
            <ListItem button key={'page6'}>
              <ListItemAvatar>
                <Avatar><WebAsset/></Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Page #6'} secondary={'Avatar, '}/>
            </ListItem>
          </Link>

        </List>
      </div>
    );
  };

  return (
    <AppBar position={'sticky'}
            color={'primary'}
            elevation={1}
            className={classes.appmenubar}  >
      <Toolbar variant={'dense'}>
        <IconButton edge={'start'}
                    className={classes.menuButton}
                    color={'inherit'}
                    aria-label={'menu'}
                    onClick={toggleDrawer(true)}>
          <MenuIcon/>
        </IconButton>
        <Drawer anchor={'left'}
                open={drawerOpen}
                onClose={toggleDrawer(false)}>
          <DrawerContent/>
        </Drawer>

        <Typography variant={'h6'}
                    className={classes.title}>
          Material-UI サンプル
        </Typography>
      </Toolbar>
    </AppBar>
  );
}


