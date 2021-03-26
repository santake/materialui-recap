import React from 'react';
import {Container, Drawer, makeStyles,} from "@material-ui/core";

import {MenuBar} from './MenuBar';
import {TitlebarGridList} from "./GridList";
import {Hiddens} from "./Hiddens";
import {Grids} from "./Grids";
import {Flexbox} from "./Flexbox";
import {Buttons} from "./form/Buttons";
import {CheckboxRadioButton} from "./form/CheckboxRadioButton";
import {DateTime} from "./form/DateTime";
import {SelectItems} from "./form/SelectItems";
import {Sliders} from './form/Sliders';
import {Switches} from './form/Switches';
import {TextFieldVariation} from "./form/TextFieldVariation";
import {TransferList} from "./form/TransferList";
import {Drawers} from "./Drawers";
import {Menus} from "./Menus";
import {Steppers} from "./Steppers";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));


export default () => {
  const classes = useStyles();

  return (
    <>
      <MenuBar/>

      <Grids/>

      <Container maxWidth={'md'} mt={10}>
        <TitlebarGridList/>
      </Container>

      <Hiddens/>
      <Flexbox/>

      {/* Forms */}
      <Buttons/>
      <CheckboxRadioButton/>
      <DateTime/>
      <SelectItems/>
      <Sliders/>
      <Switches/>
      <TextFieldVariation/>
      <TransferList/>

      <Drawers/>
      <Menus/>

      <Steppers/>
    </>
  );
}

