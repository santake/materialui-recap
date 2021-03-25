import React, {useState} from 'react';
import {
  Box,
  Select,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  FormHelperText,
  ListSubheader
} from '@material-ui/core'
import {makeStyles} from "@material-ui/core";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const items = [
  <MenuItem value={10}>Ten</MenuItem>,
  <MenuItem value={20}>Twenty</MenuItem>,
  <MenuItem value={30}>Thirty</MenuItem>,
]


export const SelectItems = (props) => {
  const classes = useStyles();
  const [age, setAge] = useState('');
  const handleChange = (ev) => setAge(ev.target.value);

  const [age2, setAge2] = useState('');
  const handleChange2 = (ev) => setAge2(ev.target.value);

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Form - Select</Typography>
        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>

          <Box className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel id={'demo-simple-select-label'}>Age</InputLabel>
              <Select id={'demo-simple-select'}
                      labelId={'demo-simple-select-label'}
                      value={age}
                      onChange={handleChange}>
                {items}
              </Select>
            </FormControl>
          </Box>

          <Box className={classes.box}>
            <FormControl className={classes.formControl} variant={'filled'}>
              <InputLabel id={'demo-simple-select-label'}>Age</InputLabel>
              <Select id={'demo-simple-select'}
                      labelId={'demo-simple-select-label'}
                      value={age}
                      onChange={handleChange}>
                {items}
              </Select>
            </FormControl>
          </Box>
          <Box className={classes.box}>
            <FormControl className={classes.formControl} variant={'outlined'}>
              <InputLabel id={'demo-simple-select-label'}>Age</InputLabel>
              <Select id={'demo-simple-select'}
                      labelId={'demo-simple-select-label'}
                      value={age}
                      onChange={handleChange}>
                {items}
              </Select>
            </FormControl>
          </Box>

          <Box className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel id={'demo-simple-select-helper-label'}>Age</InputLabel>
              <Select id={'demo-simple-select-helper'}
                      labelId={'demo-simple-select-helper-label'}
                      value={age}
                      displayEmpty={true}
                      autoWidth={false}
                      onChange={handleChange}>
                <MenuItem value={''}>-</MenuItem>
                {items}
                <MenuItem value={'long'}>Loooooooooooooooooooooooong</MenuItem>
              </Select>
              <FormHelperText>ヘルパ文字列</FormHelperText>
            </FormControl>
          </Box>

          <Box className={classes.box}>
            <FormControl
              required
              className={classes.formControl}>
              <InputLabel id={'demo-simple-select-req-label'}>Age</InputLabel>
              <Select id={'demo-simple-select-req'}
                      labelId={'demo-simple-select-req-label'}
                      value={age}
                      onChange={handleChange}>
                <MenuItem value={''}>-</MenuItem>
                {items}
              </Select>
              <FormHelperText>required</FormHelperText>
            </FormControl>
          </Box>
        </Box>

        <Typography variant={'h5'}>Grouping w/ native</Typography>
        <Box display={'flex'}
             flexDirection={'row'}
             flexWrap={'wrap'}
             justifyContent={'flex-start'}
             alignItems={'flex-start'}
             alignContent={'flex-start'}>

          <Box className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel id={'demo-group-select-label'}>'native' option</InputLabel>
              <Select native
                      defaultValue={''}
                      id={'demo-group-select'}
                      labelId={'demo-group-select-label'}
                      value={age2}
                      onChange={handleChange2}>
                <option aria-label={'None'} value={''}/>
                <optgroup label={'Category #1'}>
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                  <option value={3}>Option 3</option>
                </optgroup>
                <optgroup label={'Category #2'}>
                  <option value={4}>Hige</option>
                  <option value={5}>Hanage</option>
                  <option value={6}>Munage</option>
                </optgroup>
              </Select>
              <FormHelperText>Grouped</FormHelperText>
            </FormControl>
          </Box>

          <Box className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel id={'demo-group-select-nn-label'}>no native</InputLabel>
              <Select
                      defaultValue={''}
                      id={'demo-group-select-nn'}
                      labelId={'demo-group-select-nn-label'}
                      value={age2}
                      onChange={handleChange2}>
                <MenuItem value={''}>None</MenuItem>
                <ListSubheader>Category #1</ListSubheader>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
                <ListSubheader>Category #2</ListSubheader>
                <MenuItem value={4}>Hige</MenuItem>
                <MenuItem value={5}>Hanage</MenuItem>
                <MenuItem value={6}>Munage</MenuItem>
              </Select>
              <FormHelperText>Grouped</FormHelperText>
            </FormControl>
          </Box>


        </Box>

      </Container>
    </div>
  );
}