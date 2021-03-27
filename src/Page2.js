import React from 'react';

import {Buttons} from "./form/Buttons";
import {CheckboxRadioButton} from "./form/CheckboxRadioButton";
import {DateTime} from "./form/DateTime";
import {SelectItems} from "./form/SelectItems";
import {Sliders} from './form/Sliders';
import {Switches} from './form/Switches';
import {TextFieldVariation} from "./form/TextFieldVariation";
import {TransferList} from "./form/TransferList";

export const Page2 = () => {
  return (
    <>
      <Buttons/>
      <CheckboxRadioButton/>
      <DateTime/>
      <SelectItems/>
      <Sliders/>
      <Switches/>
      <TextFieldVariation/>
      <TransferList/>
    </>
  );
}