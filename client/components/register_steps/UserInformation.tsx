import { View } from 'react-native'
import React from 'react'
import FormStyles from '@/styles/components/FormStyles'
import TextInput from '@/components/TextInput'
import Button from '../Button'
import ButtonGroupStyles from '@/styles/groups/ButtonGroupStyles'

interface UserInformationProps {
  step: number,
  form: any,
  updateFormField: (key: string, value: any) => void,
  handleNext: () => void
  handlePrev: () => void
}

const validateUserInformation = (form: any): boolean => {
  // const {password, confirmPassword} = form;
  // if (password.length < 5) {
  //   return false;
  // }

  // if (password !== confirmPassword) {
  //   return false;
  // }

  return false;
}

const UserInformation = ({step, form, updateFormField, handleNext, handlePrev}: UserInformationProps) => {
  const { displayName, username } = form;

  const handleOnNextPress = () => {
    const valid: boolean = validateUserInformation(form);
    if (!valid) {
      console.log("BAD!")
    } else {
      handleNext();
    }
  }

  return (
    <View style={[{...formStyles}]}>
      <TextInput 
        label="Display Name" 
        placeholder='Placeholder' 
        value={displayName}
        onChange={(value) => updateFormField("displayName", value)}
      />
      <TextInput 
          label="Username" 
          placeholder='Username'
          value={username}
          onChange={(value) => updateFormField("username", value)}
      />
      <View style={[{...buttonGroupStyles}]}>
        <Button
          onPress={handlePrev}
          type="primary"
          size="medium"
          text="Prev"
        />
        <Button
          onPress={() => handleOnNextPress()}
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
    flexDirection: ButtonGroupStyles.layout.flexDirection,
    gap: ButtonGroupStyles.spacing.gap,
    justifyContent: "space-between",
    marginTop: ButtonGroupStyles.spacing.marginTop,
}

export default UserInformation;