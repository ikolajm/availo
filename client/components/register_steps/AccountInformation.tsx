import { View } from 'react-native'
import React from 'react'
import FormStyles from '@/styles/components/FormStyles'
import TextInput from '@/components/TextInput'
import Button from '../Button'
import ButtonGroupStyles from '@/styles/groups/ButtonGroupStyles'

interface AccountInformationProps {
  step: number,
  form: any,
  updateFormField: (key: string, value: any) => void,
  handleNext: () => void
}

const validateAccountInformation = (form: any): boolean => {
  // const {password, confirmPassword} = form;
  // if (password.length < 5) {
  //   return false;
  // }

  // if (password !== confirmPassword) {
  //   return false;
  // }

  return true;
}

const AccountInformation = ({step, form, updateFormField, handleNext}: AccountInformationProps) => {
  const { email, password, confirmPassword } = form;

  const handleOnPress = () => {
    const valid: boolean = validateAccountInformation(form);
    if (!valid) {
      console.log("BAD!")
    } else {
      handleNext();
    }
  }

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
          onPress={() => handleOnPress()}
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