import React from 'react';
import { View } from 'react-native';
import Layout from '../styles/layout';

import defaultTheme from '../styles/themes/defaultTheme';
const backgroundColor = defaultTheme.colors.neutrals.roles.surface;
const color = defaultTheme.colors.neutrals.roles.onSurface;
const screenSpacing = Layout.spacing.screen;

const ThemedView = ({children, style, ...props}: any) => {
  return (
    <View 
        {...props} 
        style={[
            {backgroundColor},
            {color},
            {height: "100%"}, 
            {paddingHorizontal: screenSpacing.xPadding},
            style
        ]}
    >
        {children}
    </View>
  )
}

export default ThemedView;