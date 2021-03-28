import React from 'react';
import {makeStyles, Container, Typography, Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  papers: {
    margin: 2,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      backgroundColor: '#dfdfaf',
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(14),
      textAlign: 'left',
      color: theme.palette.text.primary,
    }
  }
}));


export const Papers = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Papers </Typography>
        <Grid container>
          <Grid item className={classes.papers}>
            <Paper>
              default
            </Paper>
            <Paper elevation={0}>
              elevation=0
            </Paper>
            <Paper elevation={1}>
              elevation=1<br/>
              (same as default)
            </Paper>
            <Paper elevation={3}>
              elevation=3
            </Paper>
            <Paper elevation={5}>
              elevation=5
            </Paper>
            <Paper elevation={10}>
              elevation=10
            </Paper>
          </Grid>

          <Grid item className={classes.papers}>
            <Paper variant={'outlined'}>
              variant=outlined
            </Paper>
            <Paper variant={'outlined'} square>
              variant=outlined<br/>
              w/ square
            </Paper>
          </Grid>
        </Grid>




      </Container>
    </div>
  );
};