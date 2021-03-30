import React from 'react';
import {Container, makeStyles, Typography} from "@material-ui/core";
import {SimpleDialogDemo} from "./SimpleDialogDemo";
import {AlertDialogDemo} from './AlertDialogDemo';
import {FormDialogDemo} from "./FormDialogDemo";
import {CustomizedDialogDemo} from "./CustomizedDialogDemo";
import {ScrollableDialogDemo} from "./ScrollableDialogDemo";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em'
  },
}));

export const Dialogs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Dialogs</Typography>

        <SimpleDialogDemo/>

        <AlertDialogDemo/>

        <FormDialogDemo/>

        <CustomizedDialogDemo/>

        <ScrollableDialogDemo/>
      </Container>
    </div>
  );
}