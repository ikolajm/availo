import { Text } from 'react-native'
import React, { ReactNode } from 'react'
import DefaultTheme from '../app/styles/themes/defaultTheme'

const ThemedText = ({incomingStyles, ...props}: ThemedTextProps) => {
    const defaultOnSurface = DefaultTheme.colors.neutrals.roles.onSurface;
    
    return (
        <Text
            style={[{color: defaultOnSurface}, incomingStyles]}
            {...props}
        />
    )
}

export default ThemedText;

interface ThemedTextProps {
    children: ReactNode,
    incomingStyles?: any
}