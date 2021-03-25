import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  box: {
    margin: '1em',
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#ffaabb',
    color: theme.palette.text.primary,
  }
}));


export const Flexbox = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Flex Box</Typography>

        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>
          <Box className={classes.box} order={3}>Item 3</Box>
          <Box className={classes.box} order={2}>Item 2</Box>
          <Box className={classes.box} order={1}>Item 1</Box>
        </Box>

        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>
          <Box flexGrow={1} className={classes.box}>Item flexGrow</Box>
          <Box className={classes.box}>Item</Box>
          <Box className={classes.box}>Item</Box>
        </Box>
        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>
          <Box flexShrink={1} className={classes.box}>Item flexShrink</Box>
          <Box border={2} borderColor={'primary.main'} borderRadius={10} className={classes.box}>Item not shrink</Box>
          <Box className={classes.box}>Item not shrink</Box>
        </Box>
      </Container>
    </div>
  );
}