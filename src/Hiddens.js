import React from 'react';
import {Container, Grid, Hidden, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export const Hiddens = (props) => {
  const classes = useStyles();
  const {width} = props;

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'} m={'auto'}>
      <Typography variant={'h4'}>Hidden tags</Typography>
      <Typography variant={'subtitle1'} gutterBottom>Current width: {width}</Typography>
      <Grid container spacing={3}>
        <Hidden xsUp>
          <grid item xs>
            <Paper className={classes.paper}>xsUp</Paper>
          </grid>
        </Hidden>
        <Hidden smUp>
          <grid item xs>
            <Paper className={classes.paper}>smUp</Paper>
          </grid>
        </Hidden>
        <Hidden mdUp>
          <grid item xs>
            <Paper className={classes.paper}>mdUp</Paper>
          </grid>
        </Hidden>
        <Hidden lgUp>
          <grid item xs>
            <Paper className={classes.paper}>lgUp</Paper>
          </grid>
        </Hidden>
        <Hidden xlUp>
          <grid item xs>
            <Paper className={classes.paper}>xlUp</Paper>
          </grid>
        </Hidden>
      </Grid>
      </Container>
    </div>
  );
}