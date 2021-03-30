import React, {useEffect, useState} from 'react';
import {Backdrop, Button, CircularProgress, Container, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
    marginBottom: '2em',
  },
  backdrop: {
    zIndex: 8000,
    color: '#ffffff'
  }
}));

export const Backdrops = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  const [progress, setProgress] = useState(0);
  useEffect( () => {
    const timer = setInterval(() => {
      setProgress( (prevProg) => {
        if (prevProg >= 300) {
          setOpen(false);
          return 0;
        } else {
          return prevProg + 1;
        }
      });
    }, 10);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Backdrop</Typography>
        <Button variant={'outlined'}
                color={'primary'}
                onClick={handleToggle}>
          Show Backdrop
        </Button>
        <Backdrop className={classes.backdrop}
          //onClick={handleClose}
                  open={open}>
          <CircularProgress color={'inherit'}/>
        </Backdrop>
      </Container>
    </div>
  )
}