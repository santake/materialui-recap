import React from 'react';
import {withStyles} from "@material-ui/core";
import {Tabs, Tab} from '@material-ui/core';


export const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: '#6cb8fa'
    },
    selected:{}
  }
}))( props => <Tab diableRipple {...props}/> );


export const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7'
    },
  },
})( props => <Tabs {...props} TabIndicatorProps={{children: <span/>}} /> );

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#ffffff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    }
  }
}))( props => <Tab disableRipple {...props}/>);

