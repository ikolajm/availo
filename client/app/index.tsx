import Typography from "../styles/typography";
import ThemedText from "../components/ThemedText";
import { View } from "react-native";
import ThemedLink from "../components/ThemedLink";

export default function Index() {
  const contentPreset1 = Typography.presets.preset1.content;

  return (
    <View>
      <ThemedText
        incomingStyles={[
          {...contentPreset1}
        ]}
      >
        Yoooooo!
      </ThemedText>
      <ThemedLink href="/auth/login">Login</ThemedLink>
      <ThemedLink href={"/auth/register"}>Register</ThemedLink>
    </View>
  );
}