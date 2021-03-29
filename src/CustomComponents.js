import React from 'react'
import {Button, withStyles} from "@material-ui/core";

// withStyles()(xxx) ... higher-order component, which is injecting a class property


export const StylishButton = withStyles((theme) => ( {
  root: {
    background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize'
  },
}))(Button);