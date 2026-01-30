import { StyleSheet } from 'react-native'

const buttonGroupStylesObj: any = {
    spacing: {
        marginTop: 8,
        gap: 16
    },
    layout: {
        alignSelf: "flex-start",
        flexDirection: "row",
    }
}

const ButtonGroupStyles = StyleSheet.create(buttonGroupStylesObj);
export default ButtonGroupStyles;