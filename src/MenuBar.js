import React from 'react';
import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export const MenuBar = () => {
  const classes = useStyles();
  return (
    <AppBar position={'static'}>
      <Toolbar variant={'dense'}>
        <IconButton edge={'start'}
                    className={classes.menuButton}
                    color={'inherit'}
                    aria-label={'menu'}>
          <MenuIcon/>
        </IconButton>
        <Typography variant={'h6'}
                    className={classes.title}>
          Material-UI サンプル
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
