import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../app/styles/layout'

const Divider = () => {
  const dividerStyles: any = {
    width: "100%",
    borderBottomWidth: Layout.dividers.borderWidth,
    borderColor: Layout.dividers.outline,
    marginTop: 16,
    marginBottom: 16,
  }
  return (
    <View style={[{...dividerStyles}]}></View>
  )
}

export default Divider;