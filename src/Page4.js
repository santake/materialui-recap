import React from 'react';
import {Cards} from './Cards';
import {Accordions} from './Accordions';
import {Dialogs} from "./dialog/Dialogs";
import {SnackBars} from "./SnackBars";


export const Page4 = () => {
  return (
    <>
      <Cards/>
      <Accordions/>
      <Dialogs/>
      <SnackBars/>
    </>
  );
}