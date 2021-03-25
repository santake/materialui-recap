import React, {useState} from 'react';
import {makeStyles, Grid, Container,  Slider, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  box: {
    margin: 2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary
  },
  vertical: {
    height: 300
  }
}));


export const Sliders = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Form - Sliders</Typography>

        <Typography variant={'h5'}>Continuous slider</Typography>
        <ContinuousSlider/>

        <Typography variant={'h5'}>Discrete slider</Typography>
        <DiscreteSlider/>

        <Typography variant={'h5'}>Range slider</Typography>
        <RangeSlider/>

        <Typography variant={'h5'}>Vertical slider</Typography>
        <VerticalSlider/>

      </Container>
    </div>
  );
};


const ContinuousSlider = () => {
  // Use 'getAriaValueText' attribute,
  // Or, normally use useState and onChange pair.
  const [sliderValue, setSliderValue] = useState(30);

  //const handleChange = (ev, newVal) => setSliderValue(newVal);
  const valueText = (val, idx) => {
    //console.log();
    setSliderValue(val);
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Slider //value={sliderValue}
                //onChange={handleChange}
          getAriaValueText={valueText}
                aria-labelledby={'Continuous slider'}/>
      </Grid>
      <Grid item xs={6}>
        <Typography variant={"subtitle2"}>Current value: {sliderValue}</Typography>
      </Grid>
    </Grid>
  );
}



const RangeSlider = () => {
  const [sliderValue, setSliderValue] = useState([20, 37]);
  const handleChange = (ev, newVal) => setSliderValue(newVal);
  const valueText = (val, index) => {
    //console.log(index + ": " + val);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Slider value={sliderValue}
                onChange={handleChange}
                valueLabelDisplay={'auto'}
                getAriaValueText={valueText}
                aria-labelledby={'range slider'}/>
      </Grid>
      <Grid item xs={6}>
        <Typography variant={"subtitle2"}>Current value: {sliderValue[0]} ~ {sliderValue[1]}</Typography>
      </Grid>
    </Grid>
  );
}




const DiscreteSlider = () => {
  const marks = [
    {value: 0, label: '0 C'},
    {value: 20, label: '20 C'},
    {value: 37, label: '37 C'},
    {value: 100, label: '100 C'}
  ];
  const [sliderValue, setSliderValue] = useState(20);
  const handleChange = (ev, newVal) => setSliderValue(newVal);
  return (
    <Grid container spacing={4}>
      <Grid item xs={2}>
        <Typography variant={'h6'}>Discrete:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider value={sliderValue}
                defaultValue={20}
                step={10}
                min={-10}
                max={120}
                onChange={handleChange}
                //getAriaValueText={ (v) => `{v} ℃`}
                valueLabelFormat={(x)=> x+'℃'}
                valueLabelDisplay={'on'}
                marks={marks}
                aria-labelledby={'Dicrete slider'}/>
      </Grid>
      <Grid item xs={4}>
        <Typography variant={"subtitle2"}>Current value: {sliderValue}</Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography variant={'h6'}>Restricted:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider value={sliderValue}
                defaultValue={20}
                step={null}
                min={-10}
                max={120}
                onChange={handleChange}
                valueLabelFormat={(x)=> x+'℃'}
                valueLabelDisplay={'auto'}
                marks={marks}
                aria-labelledby={'Dicrete slider'}/>
      </Grid>
      <Grid item xs={4}>
        <Typography variant={"subtitle2"}>Current value: {sliderValue}</Typography>
      </Grid>
    </Grid>
  );
}



const VerticalSlider = () => {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = useState(30);
  const handleChange = (ev, newVal) => setSliderValue(newVal);
  return (
    <Grid container spacing={4}>
      <Grid item xs={4} className={classes.vertical}>
        <Slider orientation={'vertical'}
                value={sliderValue}
                onChange={handleChange}
                aria-labelledby={'Vertical slider'}/>
      </Grid>
      <Grid item xs={6}>
        <Typography variant={"subtitle2"}>Current value: {sliderValue}</Typography>
      </Grid>
    </Grid>
  );
}
