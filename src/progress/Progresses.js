import React from 'react';
import {Container, Typography, makeStyles} from "@material-ui/core";
import {ProgressIndeterminate} from "./ProgressIndeterminate";
import {ProgressDeteminate} from "./ProgressDeterminate";
import {ProgressWithLabel} from "./ProgressWithLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em'
  },
}));
export const Progresses = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Progress variation</Typography>
        <ProgressIndeterminate/>
        <ProgressDeteminate/>
        <ProgressWithLabel/>
      </Container>
    </div>
  );
}