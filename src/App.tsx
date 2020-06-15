import React from "react";
import {
  Box,
  Grommet,
} from "grommet";
import { rootRoutes } from "./routes";

const theme = {
  global: {
    colors: {
      background: {
        light: "#ffffff",
        dark: "#000000",
      },
    },
    font: {
      family: "Roboto",
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme} full>
          <Box 
            align='center'
            justify='center'
            background={
              { 'color': "background" }
            }
            fill
            pad='medium'
            >
            {rootRoutes()}
          </Box>
    </Grommet>
  );
};

export { App };
