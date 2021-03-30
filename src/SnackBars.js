import React, {useState} from 'react';
import {Box, Button, Container, IconButton, makeStyles, Snackbar, Typography} from "@material-ui/core";
import {Alert} from '@material-ui/lab'
import {Close as CloseIcon} from "@material-ui/icons";

const useStyles = makeStyles((them) => ({
  root: {marginTop: '2em'},
}));

export const SnackBars = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Snackbars (a.k.a. Toasts)</Typography>
        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}
             mb={4}>
          <Box m={4}>
            <SimpleSnackbar horizontalPos={'left'} verticalPos={'top'}/>
          </Box>
          <Box m={4}>
            <SimpleSnackbar horizontalPos={'center'} verticalPos={'top'}/>
          </Box>
          <Box m={4}>
            <SimpleSnackbar horizontalPos={'right'} verticalPos={'top'}/>
          </Box>
          <Box m={4}>
            <SimpleSnackbar horizontalPos={'left'} verticalPos={'bottom'}/>
          </Box>
          <Box m={4}>
            <SimpleSnackbar horizontalPos={'center'} verticalPos={'bottom'}/>
          </Box>
          <Box m={4}>
            <SimpleSnackbar horizontalPos={'right'} verticalPos={'bottom'}/>
          </Box>
        </Box>

        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}
             mb={4}>
          <Box m={4}>
            <AlertSnackbar severity={'success'}/>
          </Box>
          <Box m={4}>
            <AlertSnackbar severity={'error'}/>
          </Box>
          <Box m={4}>
            <AlertSnackbar severity={'warning'}/>
          </Box>
          <Box m={4}>
            <AlertSnackbar severity={'info'}/>
          </Box>


        </Box>
      </Container>
    </div>
  );
};


const SimpleSnackbar = ({horizontalPos = 'center', verticalPos = 'bottom'}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = (ev, reason) => {
    if (reason === 'clickaway') {
      return; // not close
    }
    setOpen(false);
  };

  const anchor = {
    horizontal: horizontalPos,
    vertical: verticalPos
  };

  return (
    <div>
      <Button variant={'outlined'} onClick={handleClick}>Open {horizontalPos}/{verticalPos}</Button>
      <Snackbar open={open}
                onClose={handleClose}
                autoHideDuration={3000}
                transitionDuration={{
                  enter: 1000,
                  exit: 1000
                }}
                anchorOrigin={anchor}
                message={'これがスナックバーです！'}
                action={
                  <>
                    <Button color={'secondary'} size={'small'} onClick={handleClose}>Close</Button>
                    <IconButton size={'small'} aria-label={'close'}
                                color={'inherit'} onClick={handleClose}>
                      <CloseIcon fontSize={'small'}/>
                    </IconButton>
                  </>
                }/>
    </div>
  );
}



const AlertSnackbar = ({severity = 'success'}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = (ev, reason) => {
    if (reason === 'clickaway') {
      return; // not close
    }
    setOpen(false);
  };
  return (
    <div>
      <Button variant={'outlined'} onClick={handleClick}>Open Alert ({severity})</Button>
      <Snackbar open={open}
                onClose={handleClose}
                autoHideDuration={3000}
                transitionDuration={{
                  enter: 1000,
                  exit: 1000
                }}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
        <Alert elevation={6}
               variant={'filled'}
               severity={severity}>
          Alert(@material-ui/lab) で Snackbar (severity={severity})
        </Alert>
      </Snackbar>
    </div>
  );
}