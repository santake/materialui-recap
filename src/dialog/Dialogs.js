import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
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

        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>
          <Box>
            <SimpleDialogDemo/>
          </Box>
          <Box>
            <AlertDialogDemo/>
          </Box>
          <Box>
            <FormDialogDemo/>
          </Box>
          <Box>
            <CustomizedDialogDemo/>
          </Box>
          <Box>
            <ScrollableDialogDemo/>
          </Box>
        </Box>











      </Container>
    </div>
  );
}