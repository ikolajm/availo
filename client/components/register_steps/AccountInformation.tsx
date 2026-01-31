import { View } from 'react-native'
import React from 'react'
import FormStyles from '@/styles/components/FormStyles'
import TextInput from '@/components/TextInput'
import Button from '../Button'
import ButtonGroupStyles from '@/styles/groups/ButtonGroupStyles'
import { RegistrationForm } from '@/context/RegistrationContext'

interface AccountInformationProps {
  step: number,
  form: RegistrationForm;
  updateFormField: <K extends keyof RegistrationForm>(
    key: K,
    value: RegistrationForm[K]
  ) => void;
  handleNext?: () => void
}

const validateAccountInformation = (form: any): boolean => {

  return true;
}

const AccountInformation = ({step, form, updateFormField, handleNext}: AccountInformationProps) => {
  const { email, password, confirmPassword } = form;

  const handleOnPress = () => {
    const valid: boolean = validateAccountInformation(form);
    if (!valid) {
      console.log("BAD!")
    } else {
      // handleNext();
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