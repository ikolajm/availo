import Typography from "./styles/typography";
import ThemedText from "./components/ThemedText";
import { View } from "react-native";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

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
      <TextInput label="Test" placeholder="Type in me!" />
      <Button  size="medium" text="Press me!" />
    </View>
  );
}