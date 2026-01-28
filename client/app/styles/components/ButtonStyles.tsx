import { StyleSheet } from 'react-native'
import DefaultTheme from '../..//styles/themes/defaultTheme';
import Layout from '../../styles/layout';
import Icons from '../../styles/icons';
import Typography from '../../styles/typography';

const primary = DefaultTheme.colors.primary;
const neutral = DefaultTheme.colors.neutrals;
const buttonStylesObj: any = {
    colors: {
        primary: {
            default: primary.roles.primary,
            pressed: primary.states.hover,
            disabled: primary.states.disabled,
        },
        onPrimary: {
            default: neutral.roles.onSurface,
            pressed: neutral.states.onSurface.hover,
            disabled: neutral.states.onSurface.disabled,
        }
    },
    spacing: {
        small: {
            xPadding: 8,
            yPadding: 8
        },
        medium: {
            xPadding: 12,
            yPadding: 12
        },
        large: {
            xPadding: 16,
            yPadding: 16
        },
    },
    sizing: {
        small: {
            iconSize: Icons.small
        },
        medium: {
            height: 48,
            iconSize: Icons.medium
        },
        large: {
            iconSize: Icons.large
        },
    },
    layout: {
        borderRadius: Layout.borderRadius.br1,
        borderWidth: Layout.borderWidth.bw0,
    },
    typography: {
        small: Typography.presets.preset6.header,
        medium: Typography.presets.preset5.header,
        large: Typography.presets.preset4.header
    } 
}

const ButtonStyles = StyleSheet.create(buttonStylesObj);
export default ButtonStyles;