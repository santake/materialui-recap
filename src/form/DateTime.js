import React, {useState} from 'react';
import {Box, Container, makeStyles, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  box: {
    margin: 2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
  }
}));

export const DateTime = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Form - Date/Time</Typography>

        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>

          <Box className={classes.box}>
            <TextField type={'date'}
                       id={'date1'} name={'date1'}
                       label={'Birthday'}
                       defaultValue={'1980-01-01'}
                       InputLabelProps={ {
                         shrink:true
                       } }
            />
          </Box>

          <Box className={classes.box}>
            <TextField type={'month'}
                       id={'month1'} name={'month1'}
                       label={'Month'}
                       defaultValue={'1978-11'}
                       InputLabelProps={ {
                         shrink:true
                       } }
            />
          </Box>

          <Box className={classes.box}>
            <TextField type={'datetime-local'}
                       id={'datetime1'} name={'datetime1'}
                       label={'Birthday'}
                       defaultValue={'1994-01-04T00:01:32'}
                       InputLabelProps={ {
                         shrink:true
                       } }
                       />
          </Box>

          <Box className={classes.box}>
            <TextField type={'time'}
                       id={'time1'} name={'time1'}
                       label={'Time'}
                       defaultValue={'11:20'}
                       InputLabelProps={ {
                         shrink:true
                       } }
                       inputProps={{ step: 300, }}
                       />
          </Box>

        </Box>
      </Container>
    </div>
  );
};