import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, makeStyles, Typography} from "@material-ui/core";


import {CircularProgressWithLabel, LinearProgressWithLabel} from "./CustomProgress";

const useStyles = makeStyles((theme) => ({}));


export const ProgressWithLabel = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5));
    }, 500);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <>
      <Typography variant={'h5'}>w/ Labels</Typography>

      <Box display={'flex'} justifyContent={'flex-start'}
           flexDirection={'row'} flexWrap={'wrap'}
           alignContent={'center'} alignItems={'flex-start'}>
        <Box m={1}>
          <CircularProgressWithLabel color={'secondary'} variant={'determinate'} value={progress}/>
        </Box>

        <Box m={1} width={'60%'}>
          <LinearProgressWithLabel color={'secondary'} variant={'determinate'} value={progress}/>
        </Box>

      </Box>
    </>
  );
}


