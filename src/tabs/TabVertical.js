import React, {useState} from 'react';
import {Container, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";
import {TabPanel} from "./TabPanel";
import {Favorite, Phone} from "@material-ui/icons";


const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  tabroot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: 224,
    marginBottom: '2em'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
    //borderRight: `1px solid #f0ff0f`
  }
}));


export const TabVertical = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (ev, newVal) => setValue(newVal);

  return (

    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h5'}>Vertical Tabs</Typography>
        <div className={classes.tabroot}>

          <Tabs orientation={'vertical'}
                variant={'scrollable'}
                value={value}
                onChange={handleChange}
                aria-label={'vertical tabs example'}
                className={classes.tabs}>

            <Tab icon={<Phone/>} {...a11yProps(0)} />
            <Tab label={'Item two'} {...a11yProps(1)}/>
            <Tab label={'Item three'} {...a11yProps(2)} disabled/>
            <Tab label={'Item four'} {...a11yProps(3)}/>
            <Tab icon={<Favorite/>} {...a11yProps(4)}/>
            <Tab label={'Item six'} {...a11yProps(5)}/>
            <Tab label={'Item seven'} {...a11yProps(6)}/>
          </Tabs>

          <TabPanel index={0} value={value}>
            Item #1 <Phone/>
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
            Item #5 <Favorite/>
          </TabPanel>
          <TabPanel index={5} value={value}>
            Item #6
          </TabPanel>
          <TabPanel index={6} value={value}>
            Item #7
          </TabPanel>

        </div>
      </Container>
    </div>


  );
};