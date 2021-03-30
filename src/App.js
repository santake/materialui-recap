import React from 'react';

// NOTE: 'wouter' is used for routing. not React-router-dom!
import {Route, Switch} from 'wouter';

import {AppMenuBar} from './AppMenuBar';
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import {Page3} from "./Page3";
import {Page4} from './Page4';
import {Page5} from './Page5';
import {Page6} from './Page6';

export default () => {
  return (
    <>
      <AppMenuBar/>
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
          <Route path='/p5'>
            <Page5/>
          </Route>
          <Route path='/p6'>
            <Page6/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

