import React, {useState} from 'react';
import {
  Button,
  Checkbox,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";

import {ArrowLeft, ArrowRight, FastForward, FastRewind,} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em'
  },
  paper: {
    width: 200,
    height: 230,
    overflow: 'auto'
  },
  button: {
    margin: theme.spacing(0.5, 0)
  }
}));

const not = (a, b) => (a.filter((value) => b.indexOf(value) === -1));
const intersection = (a, b) => (a.filter((value) => b.indexOf(value) !== -1));


export const TransferList = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState([])
  const [left, setLeft] = useState([0, 1, 2, 3]);
  const [right, setRight] = useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  }
  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  }

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  }
  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  }

  const customList = (items) => (
    <Paper className={classes.paper}>
      <List dense component={'div'} role={'list'}>
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItem key={value} role={'listitem'} button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{'aria-labelledby': labelId}}/>
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List Item #${value + 1}`}/>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );


  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Form - Transfer List </Typography>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item>{customList(left)}</Grid>

          <Grid item>
            <Grid container direction={'column'} alignItems={'center'}>
              <Button variant={'outlined'}
                      className={classes.button}
                      onClick={handleAllRight}
                      disabled={left.length === 0}
                      aria-label={'Move all right'}>
                <FastForward/>
              </Button>

              <Button variant={'outlined'}
                      className={classes.button}
                      onClick={handleCheckedRight}
                      disabled={leftChecked.length === 0}
                      aria-label={'Move selected right'}>
                <ArrowRight/>
              </Button>

              <Button variant={'outlined'}
                      className={classes.button}
                      onClick={handleCheckedLeft}
                      disabled={rightChecked.length === 0}
                      aria-label={'Move selected left'}>
                <ArrowLeft/>
              </Button>

              <Button variant={'outlined'}
                      className={classes.button}
                      onClick={handleAllLeft}
                      disabled={right.length === 0}
                      aria-label={'Move all left'}>
                <FastRewind/>
              </Button>
            </Grid>
          </Grid>

          <Grid item>{customList(right)}</Grid>
        </Grid>
      </Container>
    </div>
  );
};
