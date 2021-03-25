import React, {useState} from 'react';
import {Container, Grid, InputAdornment, makeStyles, MenuItem, TextField, Typography} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4em',
  },
  component: {
    marginTop: '1em',
    marginBottom: '1em'
  }
}));


export const TextFieldVariation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Form - TextFields</Typography>

        <Variants/>

        <FormProps/>

        <SelectOption/>

        <WithIcon/>

        <InputAdornments/>

      </Container>
    </div>
  );
}

const Variants = () => {
  const classes = useStyles();
  return (
    <div className={classes.component}>
      <Typography variant={'h5'}>Props</Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField label={'standard'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'filled'} variant={'filled'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'outlined'} variant={'outlined'}/>
        </Grid>
      </Grid>
      <Typography variant={'h5'}>Size</Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField label={'small'}
                     size={'small'}
                     variant={'outlined'}
                     helperText={'no margin'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'small w/ margin'}
                     size={'small'}
                     margin={'dense'}
                     variant={'outlined'} helperText={'margin="dense"'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'small w/ margin'}
                     size={'small'}
                     margin={'normal'}
                     variant={'outlined'} helperText={'margin="normal"'}/>
        </Grid>
      </Grid>

      <Typography variant={'h5'}>w/ color="primary|secondary" ... when focused</Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField label={'secondary'} color={'secondary'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'primary'} color={'primary'}/>
        </Grid>
      </Grid>


    </div>
  );
}


const FormProps = () => {
  const classes = useStyles();
  return (
    <div className={classes.component}>
      <Typography variant={'h5'}>Various properties</Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField label={'required'}
                     required/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'disabled'}
                     disabled/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'password'}
                     type={'password'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'read-only'}
                     defaultValue={'hi!'}
                     InputProps={{readOnly: true}}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'shrink label'}
                     InputLabelProps={{shrink: true}}/>
          <TextField label={'not shrink label'}
                     InputLabelProps={{shrink: false}}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'type=search'}
                     type={'search'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'helper text'}
                     helperText={'this is helper text'}/>
        </Grid>

        <Grid item xs={3}>
          <TextField label={'Error state'}
                     error
                     value={'oh no'}
                     helperText={'incorrect input'}/>
        </Grid>

        <Grid item xs={3}>
          <TextField label={'Multiline'} variant={'outlined'}
                     multiline
                     rowsMax={5}
                     rows={3}
                     helperText={'incorrect input'}/>
        </Grid>
        <Grid item xs={6}>
          <TextField label={'Multiline and fullWidth'} variant={'outlined'}
                     multiline
                     fullWidth
                     rowsMax={5}
                     rows={3}
                     helperText={'incorrect input'}/>
        </Grid>
      </Grid>
      <Typography variant={'h5'}>Vertical margin</Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField label={'None'} value={''}
                     variant={'filled'}
                     helperText={'no margin prop'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'Dense'} value={''}
                     margin={'dense'}
                     variant={'filled'}
                     helperText={'margin="dense"'}/>
        </Grid>
        <Grid item xs={3}>
          <TextField label={'Normal'} value={''}
                     margin={'normal'}
                     variant={'filled'}
                     helperText={'margin="normal"'}/>
        </Grid>
      </Grid>

    </div>
  );
}

const SelectOption = () => {
  const currencies = [
    {value: 'USD', label: '$'},
    {value: 'JPY', label: '¥'},
    {value: 'EUR', label: '€'},
    {value: 'GBP', label: '£'},
    {value: 'CNY', label: '元'}
  ];
  const classes = useStyles();

  const [currency, setCurrency] = useState('USD');
  const handleChange = (ev) => setCurrency(ev.target.value);

  return (
    <div className={classes.component}>
      <Typography variant={'h5'}>Select</Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <TextField label={'select'} variant={'outlined'}
                     select
                     value={currency}
                     onChange={handleChange}
                     helperText={'(default) Select a currency'}>
            {currencies.map((cur) => (
              <MenuItem key={cur.value} value={cur.value}>
                {cur.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField label={'select native'} variant={'outlined'}
                     select
                     value={currency}
                     onChange={handleChange}
                     helperText={'(native) Select a currency'}
                     SelectProps={{
                       native: true
                     }}>
            {currencies.map((cur) => (
              <option key={cur.value} value={cur.value}>
                {cur.label}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
}


const WithIcon = () => {
  const classes = useStyles();
  return (
    <div className={classes.component}>
      <Typography variant={'h5'}>w/ Icon</Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <TextField label={'with icon'}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position={'start'}>
                           <AccountCircle/>
                         </InputAdornment>
                       ),
                     }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField label={'with icon'}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position={'end'}>
                           <AccountCircle/>
                         </InputAdornment>
                       ),
                     }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const InputAdornments = () => {
  const classes = useStyles();
  return (
    <div className={classes.component}>
      <Typography variant={'h5'}>Input Adornments (prefix/suffix)</Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField variant={'outlined'}
                     InputProps={{
                       startAdornment: <InputAdornment position={'start'}>$</InputAdornment>
                     }}/>
        </Grid>
        <Grid item xs={3}>
          <TextField variant={'outlined'}
                     InputProps={{
                       endAdornment: <InputAdornment position={'start'}>Kg</InputAdornment>
                     }}/>
        </Grid>
      </Grid>
    </div>
  );
}

