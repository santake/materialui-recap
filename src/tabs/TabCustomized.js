import React, {useState} from 'react';
import {AntTabs, AntTab, StyledTabs, StyledTab} from './customTabs';
import {Container, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
  root: {
    marginTop: '2em',
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534'
  }
}));


export const TabCustomized = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (ev, newValue) => setValue(newValue);

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h5'}>Customized Tabs</Typography>

        <div className={classes.demo1}>
          <AntTabs value={value}
                   onChange={handleChange}
                   aria-label={'ant example'}>
            <AntTab label={'Tab #1'}/>
            <AntTab label={'Tab #2'}/>
            <AntTab label={'Tab #3'}/>
          </AntTabs>
          <Typography className={classes.padding}/>
        </div>

        <div className={classes.demo2}>
          <StyledTabs value={value}
                      onChange={handleChange}
                      aria-label={'styled example'}>
            <StyledTab label={'Workflows'}/>
            <StyledTab label={'Datasets'}/>
            <StyledTab label={'Connections'}/>
          </StyledTabs>
          <Typography className={classes.padding}/>
        </div>

      </Container>
    </div>
  );
}