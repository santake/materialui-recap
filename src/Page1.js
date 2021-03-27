import React from 'react';

import {Grids} from './Grids';
import {TitlebarGridList} from './GridList';
import {Hiddens} from "./Hiddens";
import {Flexbox} from "./Flexbox";

export const Page1 = () => {
  return (
    <>
      <Grids/>
      <TitlebarGridList/>
      <Hiddens/>
      <Flexbox/>
    </>
  );
}