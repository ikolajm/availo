import { StyleSheet } from 'react-native'
import DefaultTheme from '../..//styles/themes/defaultTheme';

const primary = DefaultTheme.colors.primary;
const linkStyleObj: any = {
    colors: {
        default: primary.roles.primary,
    },
}
const LinkStyles = StyleSheet.create(linkStyleObj);
export default LinkStyles;