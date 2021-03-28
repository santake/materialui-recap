import React from 'react';

// NOTE: 'wouter' is used for routing. not React-router-dom!
import {Route, Switch} from 'wouter';

import {MenuBar} from './MenuBar';
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import {Page3} from "./Page3";
import {Page4} from './Page4';

export default () => {
  return (
    <>
      <MenuBar/>
      <div>
        <Switch>
          <Route path='/'>
            <Page1/>
          </Route>
          <Route path='/p1'>
            <Page1/>
          </Route>
          <Route path='/p2'>
            <Page2/>
          </Route>
          <Route path='/p3'>
            <Page3/>
          </Route>
          <Route path='/p4'>
            <Page4/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

