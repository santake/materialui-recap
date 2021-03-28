import React from 'react';
import {Drawers} from "./Drawers";
import {Menus} from "./Menus";
import {Steppers} from "./Steppers";
import {TabExamples} from "./TabExamples";
import {Appbars} from "./Appbars";
import {Papers} from './Papers';

export const Page3 = () => {
  return (
    <>
      <Drawers/>
      <Menus/>
      <Steppers/>
      <TabExamples/>
      <Appbars/>
      <Papers/>
    </>
  );
}