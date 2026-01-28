import { StyleSheet } from "react-native";

const layoutObj: any = {};
layoutObj.spacing = {};

layoutObj.spacing.screen = {
    xPadding: 16,
    yPadding: 24
}
layoutObj.spacing.content = {
    default: {
        xSpacing: 16,
        ySpacing: 16
    },
    compact: {
        xPadding: 8,
        yPadding: 8
    }
}
layoutObj.spacing.group = {
    default: {
        xSpacing: 16,
        ySpacing: 16
    },
    compact: {
        xPadding: 8,
        yPadding: 8
    },
    superCompact: {
        xPadding: 4,
        yPadding: 4
    },
}

layoutObj.borderRadius = {
    br0: 0,
    br1: 4,
    br2: 12,
    br999: 999,
}

layoutObj.borderWidth = {
    bw0: 0,
    bw1: 2,
    bw2: 4,
}

layoutObj.dividers = {
    borderWidth: layoutObj.borderWidth.bw1,
    outline: "rgba(101,104,108,15)"
}

const Layout = StyleSheet.create(layoutObj);
export default Layout;