import React from "react";
import { Heading, Box } from "grommet";
import { LoginData } from "../molecules";

export const Header = ( { heading }: HeaderProps ):JSX.Element => (
    <Box
        direction='row'
        justify='between'
        align='center'
        fill='horizontal'
    >
        <Heading 
        size='small'
        margin='small'
        level='1'
        >
          {heading}
      </Heading>
      <LoginData/>
    </Box>
)

interface HeaderProps {
    heading: string
}