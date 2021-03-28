import React from 'react';
import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#f8d475',
    color: theme.palette.text.primary,
  },
}));


export const Grids = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'} mt={3} mb={4}>
        <Typography variant={'h4'}>Grid</Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Grid #1
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Grid #2
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Grid #3
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Grid #4
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
