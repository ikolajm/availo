import { Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import ButtonStyles from '../app/styles/components/ButtonStyles';

import ThemedText from './ThemedText';

const Button = ({leftIcon, rightIcon, onPress, size="medium", style: incomingStyles, text="Press Me!", type="primary"}: buttonProps) => {
    let textStyles: any = {};
    textStyles = ButtonStyles.typography[size];

    const buttonStyles: any = {
        borderRadius: ButtonStyles.layout.borderRadius,
        borderWidth: ButtonStyles.layout.borderWidth,
        ...incomingStyles
    };
    buttonStyles.paddingHorizontal = ButtonStyles.spacing[size].xPadding;
    buttonStyles.paddingVertical = ButtonStyles.spacing[size].xPadding;
    buttonStyles.height = ButtonStyles.sizing[size].height;
    const pressedButtonStyles: any = {};

    if (type === "primary") {
        buttonStyles.backgroundColor = ButtonStyles.colors.primary.default;
        buttonStyles.color = ButtonStyles.colors.onPrimary.default;
        pressedButtonStyles.backgroundColor = ButtonStyles.colors.primary.pressed;
        pressedButtonStyles.color = ButtonStyles.colors.onPrimary.pressed;
    }

    return (
        <Pressable
            onPress={onPress}
            style={({pressed}) => [buttonStyles, pressed && pressedButtonStyles]}
        > 
            {leftIcon && (
                <Ionicons
                    style={[
                        {color: buttonStyles.color}
                    ]}
                    name={leftIcon}
                />
            )}
            <ThemedText
                incomingStyles={[
                    {...textStyles}
                ]}
            >
                {text}
            </ThemedText>
            {rightIcon && (
                <Ionicons
                    style={[
                        {color: buttonStyles.color}
                    ]}
                    name={rightIcon}
                />
            )}
        </Pressable>
    )
}

interface buttonProps {
    leftIcon?: any,
    rightIcon?: any,
    onPress: () => void,
    size?: string,
    style?: any,
    text?: string,
    type?: string
}

export default Button