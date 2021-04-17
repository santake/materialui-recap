import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  bg: {
    backgroundColor: '#cfcfcf',
    margin: '1em'
  }
}));

export const Typos = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr/>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Typography</Typography>

        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'nowrap'}
             justifyContent={'flex-start'}
             justifyItems={'flex-start'}
             alignItems={'center'}
             alignContent={'flex-start'}
             mb={4}>
          <Box className={classes.bg}>
            <Typography variant={'h5'}>No Gutter</Typography>
          </Box>
          <Box className={classes.bg}>
            <Typography variant={'h5'} gutterBottom>Gutter bottom is a bottom margin for Typography</Typography>
          </Box>
        </Box>

        <Box display={'flex'}
             flexDirection={'column'}
             flexWrap={'nowrap'}
             justifyContent={'flex-start'}
             justifyItems={'flex-start'}
             alignItems={'center'}
             alignContent={'flex-start'}>
          <Box>
            <Typography variant={'h1'}>variant h1</Typography>
          </Box>
          <Box>
            <Typography variant={'h2'}>variant h2</Typography>
          </Box>
          <Box>
            <Typography variant={'h3'}>variant h3</Typography>
          </Box>
          <Box>
            <Typography variant={'h4'}>variant h4</Typography>
          </Box>
          <Box>
            <Typography variant={'h5'}>variant h5</Typography>
          </Box>
          <Box>
            <Typography variant={'h6'}>variant h6</Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle1'} gutterBottom>variant subtitle1</Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle2'} gutterBottom>variant subtitle2</Typography>
          </Box>
          <Box>
            <Typography variant={'body1'} gutterBottom>
              variant body1 body1 body1 body1 body1 body1 body1 body1 body1
              body1 body1 body1 body1 body1 body1 body1 body1 body1
              日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語
            </Typography>
          </Box>
          <Box>
            <Typography variant={'body2'} gutterBottom>
              variant body2 body2 body2 body2 body2 body2 body2 body2 body2
              body2 body2 body2 body2 body2 body2 body2 body2 body2
              日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語
            </Typography>
          </Box>
          <Box>
            <Typography variant={'caption'} gutterBottom>
              variant caption caption caption caption caption caption caption
              caption caption caption caption caption caption caption
              日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語
            </Typography>
          </Box>
          <Box>
            <Typography variant={'button'} gutterBottom>
              variant button button button button button button button button
              button button button button button button button button
              日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語
              (uppercaseにされてる)
            </Typography>
          </Box>
          <Box>
            <Typography variant={'overline'} gutterBottom>
              variant overline overline overline overline overline overline overline
              overline overline overline overline overline overline overline
              日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語
              (uppercaseにされてる)
            </Typography>
          </Box>
          <Box>
            <Typography variant={'srOnly'} gutterBottom>
              NOTE: this 'srOnly' is NOT visible; only 'Screen Reader' can see/read this.
            </Typography>
          </Box>
          <Box>
            <Typography variant={'inherit'} gutterBottom>
              variant inherit inherit inherit inherit inherit inherit inherit inherit
              inherit inherit inherit inherit inherit inherit inherit
              日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語 日本語
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}