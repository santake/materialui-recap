import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, LinearProgress, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({}));


export const ProgressDeteminate = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 300);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <>
      <Typography variant={'h5'}>Determinate</Typography>

      <Typography variant={'h6'}>Circular</Typography>
      <Box display={'flex'} justifyContent={'flex-start'}
           flexDirection={'row'} flexWrap={'wrap'}
           alignContent={'center'} alignItems={'flex-start'}>
        <Box m={1}>
          <CircularProgress variant={'determinate'} value={25}/>
        </Box>
        <Box m={1}>
          <CircularProgress variant={'determinate'} value={50}/>
        </Box>
        <Box m={1}>
          <CircularProgress variant={'determinate'} value={75}/>
        </Box>
        <Box m={1}>
          <CircularProgress variant={'determinate'} value={100}/>
        </Box>
        <Box m={1}>
          <CircularProgress variant={'determinate'} value={progress}/>
        </Box>
      </Box>

      <Typography variant={'h6'}>Linear</Typography>
      <Box display={'flex'} justifyContent={'flex-start'}
           flexDirection={'row'} flexWrap={'wrap'}
           alignContent={'center'} alignItems={'flex-start'}>
        <Box m={1} width={300}>
          <LinearProgress variant={'determinate'} value={25}/>
        </Box>
        <Box m={1} width={300}>
          <LinearProgress variant={'determinate'} value={50}/>
        </Box>
        <Box m={1} width={300}>
          <LinearProgress variant={'determinate'} value={75}/>
        </Box>
        <Box m={1} width={300}>
          <LinearProgress variant={'determinate'} value={100}/>
        </Box>
        <Box m={1} width={300}>
          <LinearProgress variant={'determinate'} value={progress}/>
        </Box>

      </Box>
    </>
  );
}