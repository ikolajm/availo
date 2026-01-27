import { Text } from "react-native";
import DefaultTheme from "./styles/themes/defaultTheme";
import Typography from "./styles/typography";

export default function Index() {
  const textColor = DefaultTheme.colors.neutrals.roles.onSurface;
  const contentPreset1 = Typography.presets.preset1.content;

  return (
    <Text
      style={[
        {color: textColor},
        {...contentPreset1}
      ]}
    >
      Yoooooo!
    </Text>
  );
}