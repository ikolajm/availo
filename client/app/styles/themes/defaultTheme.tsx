import { StyleSheet } from "react-native";

const defaultThemeObj: any = {};
defaultThemeObj.colors = {};

// NEUTRALS
defaultThemeObj.colors.neutrals = {
    roles: {
        onSurface: "#E2E5E9",
        onSurfaceSubtle: "#B0B3B8",
        onSurfaceInverse: "#252728", 
        surface: "#252728", 
        surface1: "#3B3D3E", 
        surface2: "#46484B", 
        outline: "#65686C", 
    },
    states: {
        onSurface: {
            hover: "#C5CBD3",
            active: "#B7BEC8",
            disabled: "rgba(226,229,223,65)",
        },
        surface1: {
            active: "#2F3132",
            disbled: "rgba(59,61,62,65)",
        }, 
        surface2: {
            active: "#393A3D",
            disabled: "rgba(70,72,75,65)",
        }, 
    }
}
// PRIMARY
defaultThemeObj.colors.primary = {
    roles: {
        primary: "#60A5FA",
        subtle: "#D6E9FF",
        emphasis: "#07264D"
    },
    states: {
        hover: "#528CD4",
        active: "#4D84C8",
        disabled: "rgba(96,165,250,65)"
    }
}

const DefaultTheme = StyleSheet.create(defaultThemeObj);
export default DefaultTheme;