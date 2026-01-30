import { StyleSheet } from "react-native";

const typograhyObj: any = {};
typograhyObj.presets = {};

typograhyObj.presets.preset1 = {
    header: {
        fontFamily: "Lexend",
        fontSize: 40,
        lineHeight: 56,
        fontWeight: "regular"
    },
    content: {
        fontFamily: "Inter",
        fontSize: 40,
        lineHeight: 56,
        fontWeight: "light"
    },
}
typograhyObj.presets.preset2 = {
    header: {
        fontFamily: "Lexend",
        fontSize: 32,
        lineHeight: 40,
        fontWeight: "regular"
    },
    content: {
        fontFamily: "Inter",
        fontSize: 32,
        lineHeight: 40,
        fontWeight: "light"
    },
}
typograhyObj.presets.preset3 = {
    header: {
        fontFamily: "Lexend",
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "regular"
    },
    content: {
        fontFamily: "Inter",
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "light"
    },
}
typograhyObj.presets.preset4 = {
    header: {
        fontFamily: "Lexend",
        fontSize: 20,
        lineHeight: 28,
        fontWeight: "regular"
    },
    content: {
        fontFamily: "Inter",
        fontSize: 20,
        lineHeight: 28,
        fontWeight: "light"
    },
}
typograhyObj.presets.preset5 = {
    header: {
        fontFamily: "Lexend",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "regular"
    },
    content: {
        fontFamily: "Inter",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "light"
    },
}
typograhyObj.presets.preset6 = {
    header: {
        fontFamily: "Lexend",
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "regular"
    },
    content: {
        fontFamily: "Inter",
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "light"
    },
}
typograhyObj.presets.preset7 = {
    header: {
        fontFamily: "Lexend",
        fontSize: 12,
        lineHeight: 20,
        fontWeight: "regular"
    },
    content: {
        fontFamily: "Inter",
        fontSize: 12,
        lineHeight: 20,
        fontWeight: "light"
    },
}

const Typography = StyleSheet.create(typograhyObj);
export default Typography;