import React from "react";
import { Box } from "grommet";
import { Header } from "../organisms";


export const MainTemplate = ({ children, ...otherProps }: MainTemplateProps):JSX.Element => {
    return (
    <Box 
      align='start'
      direction='column'
      fill
      >
        <Header {...otherProps} />      
      {children}
    </Box>
    )
}

interface MainTemplateProps {
    heading: string,
    children: React.ReactNode,
}

