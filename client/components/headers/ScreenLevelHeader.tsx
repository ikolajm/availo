import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedText from '../ThemedText'
import Typography from '@/styles/typography'
import DefaultTheme from '@/styles/themes/defaultTheme'

interface ScreenLevelHeaderProps {
    alignSelf?: string,
    title: string,
    subtitle: string
}

const ScreenLevelHeader = ({alignSelf, title, subtitle}: ScreenLevelHeaderProps) => {
    const headerContainerStyles: any = {
        alignSelf: alignSelf ?? "flex-start"
    }
    return (
        <View style={[{...headerContainerStyles}]}>
        <ThemedText incomingStyles={[{...titleStyles}]}>{title}</ThemedText>
        <ThemedText incomingStyles={subtitleStyles}>{subtitle}</ThemedText>
        </View>
    )
}

const titleStyles: any = {
    ...Typography.presets.preset4.header
}
const subtitleStyles: any = {
    color: DefaultTheme.colors.neutrals.roles.onSurfaceSubtle,
    ...Typography.presets.preset5.content
}

export default ScreenLevelHeader;