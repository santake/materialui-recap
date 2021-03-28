import React from 'react';
import {Box, Button, ButtonGroup, Container, Fab, IconButton, makeStyles, Typography} from "@material-ui/core";
import {Add, Apple as AppleIcon} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    //marginTop: '2em',
  },
  box: {
    margin: 2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
  }
}));


export const Buttons = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Form - Buttons</Typography>

        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>

          <Box className={classes.box}>
            <Button variant={'contained'} color={'primary'}>Primary (contained)</Button>
          </Box>
          <Box className={classes.box}>
            <Button variant={'contained'} color={'primary'} disableElevation={true}>Primary (no elevation)</Button>
          </Box>
          <Box className={classes.box}>
            <Button variant={'outlined'} color={'primary'}>Primary (outlined)</Button>
          </Box>
          <Box className={classes.box}>
            <Button variant={'contained'} color={'secondary'}>Secondary</Button>
          </Box>
          <Box className={classes.box}>
            <Button variant={'contained'} disabled>Disabled</Button>
          </Box>
          <Box className={classes.box}>
            <Button variant={'contained'} href={'#'}>Link button</Button>
          </Box>
          <Box className={classes.box}>
            <Button color={'primary'}>Text button</Button>
          </Box>
          <Box className={classes.box}>
            <Button variant={'contained'} color={'primary'} size={'small'}>Small</Button>
          </Box>
          <Box className={classes.box}>
            <Button variant={'contained'} color={'primary'} size={'medium'}>Medium</Button>
          </Box>
          <Box className={classes.box}>
            <Button variant={'contained'} color={'primary'} size={'large'}>Large</Button>
          </Box>
          <Box className={classes.box}>
            Icon button:
            <IconButton color={'secondary'} aria-label={'Icon button'} component={'span'}>
              <AppleIcon/>
            </IconButton>
          </Box>
        </Box>

        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>
          <Box className={classes.box}>
            <ButtonGroup color={'primary'} aria-label={'Button group'} variant={'contained'}>
              <Button>ひとつめ</Button>
              <Button>ふたつめ</Button>
              <Button>みっつめ</Button>
            </ButtonGroup>
          </Box>

          <Box className={classes.box}>
            <ButtonGroup color={'primary'} aria-label={'Button group'} variant={'outlined'}>
              <Button>ひとつめ</Button>
              <Button>ふたつめ</Button>
              <Button>みっつめ</Button>
            </ButtonGroup>
          </Box>

          <Box className={classes.box}>
            <ButtonGroup color={'primary'} aria-label={'Button group'} variant={'text'}>
              <Button>ひとつめ</Button>
              <Button>ふたつめ</Button>
              <Button>みっつめ</Button>
            </ButtonGroup>
          </Box>

          <Box className={classes.box}>
            <ButtonGroup size={'large'} color={'primary'} aria-label={'Button group'} variant={'contained'}>
              <Button>ひとつめ</Button>
              <Button>ふたつめ</Button>
              <Button>みっつめ</Button>
            </ButtonGroup>
          </Box>

          <Box className={classes.box}>
            <ButtonGroup orientation={'vertical'} color={'primary'} aria-label={'Button group'} variant={'contained'}>
              <Button>ひとつめ</Button>
              <Button>ふたつめ</Button>
              <Button>みっつめ</Button>
            </ButtonGroup>
          </Box>
        </Box>


        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>

          <Typography variant={'subtitle2'}>Floating Action Button (FAB)</Typography>
          <Box className={classes.box}>
            <Fab color={'primary'} aria-label={'Add'} size={'medium'}>
              <Add/>
            </Fab>
          </Box>
          <Box className={classes.box}>
            <Fab color={'primary'} aria-label={'Add'} variant={'extended'} size={'medium'}>
              <Add/>
            </Fab>
          </Box>

        </Box>
      </Container>
    </div>
  );
}