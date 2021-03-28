import React from 'react';

import {Grids} from './Grids';
import {TitlebarGridList} from './GridList';
import {Hiddens} from "./Hiddens";
import {Flexbox} from "./Flexbox";
import {makeStyles} from "@material-ui/core";


export const Page1 = () => {
  return (
    <div>
      <Grids/>
      <TitlebarGridList/>
      <Hiddens/>
      <Flexbox/>
    </div>
  );
}