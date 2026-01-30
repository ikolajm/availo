import { View } from 'react-native'
import React from 'react'
import FormStyles from '@/app/styles/components/FormStyles'
import TextInput from '@/components/TextInput'
import Button from '../Button'
import ButtonGroupStyles from '@/app/styles/groups/ButtonGroupStyles'

interface AccountInformationProps {
  step: number,
  form: any,
  updateFormField: (key: string, value: any) => void
}

const AccountInformation = ({step, form, updateFormField}: AccountInformationProps) => {
  const { email, password, confirmPassword } = form;

  return (
    <View style={[{...formStyles}]}>
      <TextInput 
        label="Email" 
        placeholder='email@website.com' 
        value={email}
        onChange={(value) => updateFormField("email", value)}
        keyboardType="email-address"
      />
      <TextInput 
          label="Password" 
          placeholder='••••••••'
          value={password}
          onChange={(value) => updateFormField("password", value)}
          secureTextEntry 
      />
      <TextInput 
          label="Confirm Password" 
          placeholder='••••••••'
          value={confirmPassword}
          onChange={(value) => updateFormField("confirmPassword", value)}
          secureTextEntry 
      />
      <View style={[{...buttonGroupStyles}]}>
        <Button
          onPress={() => console.log('yay')}
          type="primary"
          size="medium"
          text="Next"
        />
      </View>
    </View>
  )
}

const formStyles: any = {
  gap: FormStyles.spacing.gap,
  width: FormStyles.sizing.width,
}
const buttonGroupStyles: any = {
  alignSelf: "flex-end",
  gap: ButtonGroupStyles.spacing.gap,
  marginTop: ButtonGroupStyles.spacing.marginTop,
}

export default AccountInformation;