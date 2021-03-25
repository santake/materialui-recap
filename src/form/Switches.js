import React, {useState} from 'react';
import {
  makeStyles,
  Grid,
  Container,
  Slider,
  Typography,
  Switch,
  FormControlLabel,
  FormControl, FormLabel, FormGroup
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  vertical: {
    height: 300
  }
}));


export const Switches = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    checkedA: false,
    checkedB: false
  });
  const handleChange = (ev) => {
    setState({
      ...state,
      [ev.target.name]: ev.target.checked
    });
  }


  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Form - Switches</Typography>

        <Grid container spacing={4}>
          <Grid item xs={2}>
            <Switch name={'checkedA'}
                    checked={state.checkedA}
                    onChange={handleChange}
                    inputProps={ {'aria-label': 'secondary checkbox'} }
                    />
          </Grid>
          <Grid item xs={2}>
            Current: {state.checkedA ? <strong>ON</strong>: <span>off</span>}
          </Grid>


          <Grid item xs={3}>
            <Typography variant={'subtitle2'}>w/ Label</Typography>
            <FormControlLabel
              label={'スイッチです'}
              labelPlacement={'top'} //top, bottom, end(default), or start
              control={
                <Switch name={'checkedB'}
                        color={'primary'}
                        checked={state.checkedB}
                        onChange={handleChange}
                        inputProps={ {'aria-label': 'primary checkbox'} }/>
              } />
          </Grid>
        </Grid>

        <SwitchGroup/>

      </Container>
    </div>
  );
};


const SwitchGroup = () => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    anton : false,
  });
  const handleChange = (ev) => setState({...state, [ev.target.name]: ev.target.checked});
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <FormControl component={'fieldset'}>
          <FormLabel component={'legend'}>Switchのグループ化</FormLabel>
          <FormGroup>

            <FormControlLabel
              label={'Gilad Gray'}
              control={
                <Switch name={'gilad'}
                        color={'primary'}
                        checked={state.gilad}
                        onChange={handleChange}/>
              } />

            <FormControlLabel
              label={'Json Watson'}
              control={
                <Switch name={'jason'}
                        color={'secondary'}
                        checked={state.jason}
                        onChange={handleChange}/>
              } />

            <FormControlLabel
              label={'Anton Tony'}
              control={
                <Switch name={'anton'}
                        color={'default'}
                        checked={state.anton}
                        onChange={handleChange}/>
              } />





          </FormGroup>
        </FormControl>






      </Grid>
    </Grid>
  );
}

