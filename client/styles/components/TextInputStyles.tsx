import { StyleSheet } from 'react-native'
import DefaultTheme from '../themes/defaultTheme';
import Layout from '../layout';
import Typography from '../typography';

const neutrals = DefaultTheme.colors.neutrals;
const inputStyleObj: any = {
    colors: {
        default: {
            background: neutrals.roles.surface1,
            text: neutrals.roles.onSurface,
            outline: neutrals.roles.outline
        }
    },
    layout: {
        borderRadius: Layout.borderRadius.br1,
        borderWidth: Layout.borderWidth.bw1,
    },
    sizing: {
      height: 48
    },
    spacing: {
      xPadding: 8,
      yPadding: 0
    },
    typography: Typography.presets.preset5.content
}
const TextInputStyles = StyleSheet.create(inputStyleObj);
export default TextInputStyles;