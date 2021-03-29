import React, {useState} from 'react';

import {AppBar, Tabs, Tab, makeStyles, Container, Typography} from "@material-ui/core";
import {TabPanel} from "./TabPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
    flexGrow: 1,
    //width: '50%',
    backgroundColor: theme.palette.background.paper
  }
}))


const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
};


export const TabScrollable = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (ev, newValue) => setValue(newValue);

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h5'}>Tabs w/ Scrollable function (and w/ disabled tabs)</Typography>

      <AppBar position={'relative'}
              color={'default'}>

        <Tabs value={value}
              mt={'3em'}
              onChange={handleChange}
              indicatorColor={'primary'}
              textColor={'primary'}
              variant={'scrollable'}
              scrollButtons={'auto'}
              aria-label={'scrollable auto tabs example'}>

          <Tab label={'Item one'} {...a11yProps(0)}/>
          <Tab label={'Item two'} {...a11yProps(1)}/>
          <Tab label={'Item three'} {...a11yProps(2)} disabled/>
          <Tab label={'Item four'} {...a11yProps(3)}/>
          <Tab label={'Item five'} {...a11yProps(4)}/>
          <Tab label={'Item six'} {...a11yProps(5)}/>
          <Tab label={'Item seven'} {...a11yProps(6)}/>
        </Tabs>

        <TabPanel index={0} value={value}>
          Item #1
        </TabPanel>
        <TabPanel index={1} value={value}>
          Item #2
        </TabPanel>
        <TabPanel index={2} value={value}>
          Item #3
        </TabPanel>
        <TabPanel index={3} value={value}>
          Item #4
        </TabPanel>
        <TabPanel index={4} value={value}>
          Item #5
        </TabPanel>
        <TabPanel index={5} value={value}>
          Item #6
        </TabPanel>
        <TabPanel index={6} value={value}>
          Item #7
        </TabPanel>

      </AppBar>

      </Container>
    </div>
  );


}