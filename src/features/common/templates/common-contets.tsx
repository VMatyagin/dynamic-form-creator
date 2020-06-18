import React from "react"
import { MainTemplate } from "../../../ui/templates"
import { Box } from "grommet"

export const CommonContentTemplate = ({ children }: CommonContentTemplateProps): JSX.Element => (
    <MainTemplate heading='Анкеты СПбСО'>
        <Box
            align='start'
            justify='center'
            direction='row'
            background={
                { color: 'background-front' }
            } 
            round='medium'
            pad='small'
            elevation='large'
            fill  
        >
            {children}            
        </Box>
    </MainTemplate>
)

interface CommonContentTemplateProps {
    children: React.ReactNode
}