import React, {useState} from 'react';
import {Button, Container, Grid, makeStyles, Menu, MenuItem, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    flexGrow: 1,
  }
}));

const menuOpts = [
  'Kochi Fiting Dogs',
  'Kagawa Marugame Pigs',
  'Ehime Mikans',
  'Tokushima Kechies'
]


export const Menus = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const handleOpen = (ev) => {
    setAnchorEl(ev.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (ev, index) => {
    setSelectedIdx(index);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'} mt={3}>
        <Typography variant={'h4'}>Menus</Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button aria-controls={'simple-menu'} aria-haspopup={'true'} onClick={handleOpen}>
              Open menu
            </Button>
            <Menu id='simple-menu'
                  keepMounted
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
              {
                menuOpts.map((opt, index) => (
                  <MenuItem key={opt}
                            //disabled={index === 0}
                            selected={index === selectedIdx}
                            onClick={(ev) => handleMenuItemClick(ev, index)}>

                    {opt}
                  </MenuItem>
                ))
              }
            </Menu>
          </Grid>
          <Grid item xs={4}>
            Current item: <Typography variant={'subtitle1'}>
              {menuOpts[selectedIdx]}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

