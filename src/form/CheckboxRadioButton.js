import React from 'react';
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  makeStyles,
  Typography,
  RadioGroup, Radio
} from "@material-ui/core";
import {Favorite, FavoriteBorder} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  box: {
    margin: 2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
  }
}));


export const CheckboxRadioButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Form - Checkbox &amp; Radio Button</Typography>

        <Typography variant={'h5'}>Checkbox</Typography>
        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>

          <FormGroup row>
            <FormControlLabel
              control={<Checkbox name={'checked1'} color={'primary'}/>}
              label={'Primary'}/>

            <FormControlLabel
              control={<Checkbox name={'checked2'} color={'secondary'}/>}
              label={'Secondary'}/>

            <FormControlLabel
              control={<Checkbox name={'checked3'} indeterminate/>}
              label={'Indeterminate'}/>

            <FormControlLabel
              control={<Checkbox icon={<FavoriteBorder/>}
                                 checkedIcon={<Favorite/>}
                                 name={'checked4'}
                                 color={'secondary'}/> }
              label={'Custom Icon check'}/>

          </FormGroup>
        </Box>


        <Typography variant={'h5'}>Radio button</Typography>
        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>

          <FormControl component={'fieldset'}>
            <FormLabel component={'legend'}>Vertical</FormLabel>
            <RadioGroup aria-label={'gender'}
                        name={'gender1'}>
              <FormControlLabel control={<Radio/>} label={'Female'} value={'female'}/>
              <FormControlLabel control={<Radio color={'primary'}/>} label={'Male'} value={'male'}/>
              <FormControlLabel control={<Radio/>} label={'Other'} value={'other'}/>
              <FormControlLabel control={<Radio/>} label={'(disabled)'} value={'disabled'} disabled/>
            </RadioGroup>
          </FormControl>

          <FormControl component={'fieldset'}>
            <FormLabel component={'legend'}>Horizontal</FormLabel>
            <RadioGroup aria-label={'gender'}
                        name={'food'}
                        row={true}  >
              <FormControlLabel control={<Radio/>} label={'Fish'} value={'fish'}/>
              <FormControlLabel control={<Radio/>} label={'Meat'} value={'meat'}/>
            </RadioGroup>
          </FormControl>

        </Box>
      </Container>
    </div>
  );
}