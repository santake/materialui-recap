import React from 'react';
import {Drawers} from "./Drawers";
import {Menus} from "./Menus";
import {Steppers} from "./Steppers";
import {Menubars} from "./Menubars";
import {Papers} from './Papers';


export const Page3 = () => {
  return (
    <>
      <Drawers/>
      <Menus/>
      <Steppers/>
      <Menubars/>
      <Papers/>
    </>
  );
}