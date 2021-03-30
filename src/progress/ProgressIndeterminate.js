import React from 'react';
import {Box, CircularProgress, LinearProgress, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));


export const ProgressIndeterminate = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant={'h5'}>Indeterminate</Typography>

      <Typography variant={'h6'}>Circular</Typography>
      <Box display={'flex'} justifyContent={'flex-start'}
           flexDirection={'row'} flexWrap={'wrap'}
           alignContent={'center'} alignItems={'flex-start'}>
        <Box m={1}>
          <CircularProgress/>
        </Box>
        <Box m={1}>
          <CircularProgress color={'secondary'}/>
        </Box>
      </Box>

      <Typography variant={'h6'}>Linear</Typography>
      <Box display={'flex'} justifyContent={'flex-start'}
           flexDirection={'row'} flexWrap={'wrap'}
           alignContent={'center'} alignItems={'flex-start'}>
        <Box m={1} width={300}>
          <LinearProgress/>
        </Box>
        <Box m={1} width={300}>
          <LinearProgress color={'secondary'}/>
        </Box>

      </Box>
    </>
  );
};
