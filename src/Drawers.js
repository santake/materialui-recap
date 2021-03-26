import React, {useState} from 'react';
import {
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Drawer,
  Grid,
  Container, Typography
} from "@material-ui/core";
import clsx from 'clsx';
import {Inbox, Mail} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}));


export const Drawers = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false
  });

  const toggleDrawer = (anchor, open) => (ev) => {
    if (ev.type === 'keydown'
      && (ev.key == 'Tab' || ev.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  }

  const list = (anchor) => (
    <div className={clsx(classes.list,
      {[classes.fullList]: anchor === 'top' || anchor === 'bottom'}
    )}
         role={'presentation'}
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        { ['Inbox', 'Starred', 'Send email', 'Drafts'].map( (text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox/> : <Mail/>}
            </ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        { ['All mail', 'Trash', 'Spam'].map( (text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox/> : <Mail/>}
            </ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Drawers</Typography>
        <Grid container spacing={2} alignItems={'center'}>
          {['left', 'right', 'top', 'bottom'].map((anchor) => (
            <div key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </div>
          ))}

        </Grid>
      </Container>




    </div>
  );
}