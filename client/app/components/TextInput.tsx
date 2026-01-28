import { TextInput as Input, View } from 'react-native';
import React, { useState } from 'react';
import Typography from '../styles/typography';
import DefaultTheme from '../styles/themes/defaultTheme';
import ThemedText from './ThemedText';
import { default as InputStyles } from '../styles/components/TextInputStyles';

interface InputProps {
  label: string,
  placeholder: string
}

const TextInput = ({label, placeholder}: InputProps) => {
  const [text, updateText] = useState("");

  const labelStyles = {
    ...Typography.presets.preset5.header
  }

  const inputTextColor = InputStyles.colors.default.text;
  const inputTextStyles = {...InputStyles.typography};

  const inputStyles = {
    height: InputStyles.sizing.height,
    paddingHorizontal: InputStyles.spacing.xPadding,
    paddingVertical: InputStyles.spacing.yPadding,
    backgroundColor: InputStyles.colors.default.background,
    borderColor: InputStyles.colors.default.outline,
    borderRadius: InputStyles.layout.borderRadius,
    borderWidth: InputStyles.layout.borderWidth,
    color: inputTextColor,
    ...inputTextStyles
  }

  return (
    <View>
      <ThemedText incomingStyles={{...labelStyles}}>{label}:</ThemedText>
      <Input
        style={[inputStyles]}
        onChangeText={updateText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={DefaultTheme.colors.neutrals.roles.onSurfaceSubtle}
      />
    </View>
  )
}

export default TextInput;