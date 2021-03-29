import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Tabs, Tab,
  AppBar, Box, Container, makeStyles, Typography} from "@material-ui/core";

import {TabPanel} from './TabPanel';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
}));

const allyProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
};


export const TabSimple = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (ev, newValue) => setValue(newValue);

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Tabs</Typography>

        <Typography variant={'h5'}>Very simple</Typography>
        <AppBar position={'relative'} color={'secondary'}>
          <Tabs value={value}
                onChange={handleChange}
                aria-label={'simple tabs example'}>
            <Tab label={'Item One'} {...allyProps(0)}/>
            <Tab label={'Item Two'} {...allyProps(1)}/>
            <Tab label={'Item Three'} {...allyProps(2)}/>
          </Tabs>
        </AppBar>
        <TabPanel index={0} value={value}>
          Item one
        </TabPanel>
        <TabPanel index={1} value={value}>
          Item 2
        </TabPanel>
        <TabPanel index={2} value={value}>
           Item 3
        </TabPanel>

      </Container>

    </div>
  );
};


