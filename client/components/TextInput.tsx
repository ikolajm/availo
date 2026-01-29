import { TextInput as Input, KeyboardTypeOptions, View } from 'react-native';
import React, { useState } from 'react';
import Typography from '../app/styles/typography';
import DefaultTheme from '../app/styles/themes/defaultTheme';
import ThemedText from './ThemedText';
import { default as InputStyles } from '../app/styles/components/TextInputStyles';

interface InputProps {
  keyboardType?: KeyboardTypeOptions,
  label: string,
  placeholder: string,
  value: string,
  onChange: (value: string) => void
  secureTextEntry?: boolean
}

const TextInput = ({keyboardType, label, placeholder, value, onChange, secureTextEntry=false}: InputProps) => {
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
        style={[{...inputStyles}]}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={DefaultTheme.colors.neutrals.roles.onSurfaceSubtle}
        keyboardType={keyboardType ? keyboardType : "default"}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default TextInput;