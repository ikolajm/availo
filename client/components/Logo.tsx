import { Image, Text, View } from 'react-native'
import React from 'react'
import DefaultTheme from '../styles/themes/defaultTheme'
import Typography from '../styles/typography'

const Logo = ({logoWidth, logoHeight, flexDirection, gap, typographyPreset, typographyType, text}: LogoProps) => {
    const containerStyles: any = {
        display: "flex",
        flexDirection,
        gap,
        alignItems: "center",
        justifyContent: "center",
    }
    const logoStyles: any = {
        width: logoWidth,
        height: logoHeight,
    }
    const foundTypographyPreset = {...Typography.presets[typographyPreset]}
    const textStyles = {
        color: DefaultTheme.colors.neutrals.roles.onSurface,
        ...foundTypographyPreset[typographyType]
    }

    return (
        <View style={[{...containerStyles}]}>
            <Image
                source={require("@/assets/images/availo.png")}
                style={[{...logoStyles}]}
            />
            <Text style={[{...textStyles}]}>{text}</Text>
        </View>
    )
}

interface LogoProps {
    logoWidth: string | number,
    logoHeight: string | number,
    flexDirection: string,
    gap: string | number,
    typographyPreset: string,
    typographyType: string,
    text: string
}

export default Logo;