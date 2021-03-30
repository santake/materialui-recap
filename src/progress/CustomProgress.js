import React from 'react';
import {Box, CircularProgress, LinearProgress, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';


export const CircularProgressWithLabel = (props) => {
  return (
    <Box position={'relative'} display={'inline-flex'}>
      <CircularProgress variant={'determinate'} {...props}/>
      <Box top={0} left={0} bottom={0} right={0}
           position={'absolute'}
           display={'flex'}
           alignItems={'center'}
           justifyContent={'center'}>
        <Typography component={'div'}
                    variant={'caption'}
                    color={'textSecondary'}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
}


export const LinearProgressWithLabel = (props) => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Box width={'100%'} mr={1}>
        <LinearProgress variant={'determinate'} {...props}/>
      </Box>
      <Box minWidth={35}>
        <Typography variant={'body2'}
                    color={'textSecondary'}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
}