import React from 'react';

import {TabSimple} from "./tabs/TabSimple";
import {TabScrollable} from "./tabs/TabScrollable";
import {TabCustomized} from "./tabs/TabCustomized";
import {TabVertical} from "./tabs/TabVertical";
import {Progresses} from "./progress/Progresses";
import {Divider} from "@material-ui/core";

export const Page5 = () => {
  return (
    <>
      <TabSimple/>
      <TabScrollable/>
      <TabCustomized/>
      <TabVertical/>

      <Divider/>
      <Progresses/>
    </>
  );
}