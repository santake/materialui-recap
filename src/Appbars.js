import React , {useState} from 'react';
import {AppBar, Badge, Container, Menu, Grid, IconButton, makeStyles, MenuItem, Toolbar, Typography} from "@material-ui/core";

import {AccountCircle, Mail, Notifications} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export const Appbars = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (ev) => setAnchorEl(ev.currentTarget);
  const handleProfileMenuClose = (ev) => setAnchorEl(null);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu id={menuId}
          anchorEl={anchorEl}
          anchorOrigin={ {vertical: 'top', horizontal: 'right'} }
          keepMounted
          transformOrigin={ {vertical: 'top', horizontal: 'right'} }
          open={isMenuOpen}
          onClose={handleProfileMenuClose}>
      <MenuItem onClick={handleProfileMenuClose}>Profile!</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>Logout!</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>App Bars</Typography>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <AppBar position={'static'}>
              <Toolbar>
                <IconButton edge={'start'}
                            className={classes.menuButton}
                            color={'inherit'}
                            aria-label={'menu'}>
                  <Menu/>
                </IconButton>
                <Typography variant={'h6'} className={classes.title}>
                  News
                </Typography>

                <IconButton aria-label={'show 4 new mails'} color={'inherit'}>
                  <Mail/>
                </IconButton>

                <IconButton aria-label={'show 17 new notifications'} color={'inherit'}>
                  <Badge badgeContent={17} color={'secondary'}>
                    <Notifications/>
                  </Badge>
                </IconButton>

                <IconButton edge={'end'}
                            aria-label={'Account of current user'}
                            aria-controls={menuId}
                            aria-haspopup={'true'}
                            onClick={handleProfileMenuOpen}
                            color={'inherit'}>
                  <AccountCircle/>
                </IconButton>

              </Toolbar>
            </AppBar>
            {renderMenu} {/* here ?A?A?!!!! */}
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}