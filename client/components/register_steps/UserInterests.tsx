import { View } from 'react-native'
import React from 'react'
import FormStyles from '@/styles/components/FormStyles'
import TextInput from '@/components/TextInput'
import Button from '../Button'
import ButtonGroupStyles from '@/styles/groups/ButtonGroupStyles'

interface UserInterestProps {
  step: number,
  form: any,
  updateFormField: (key: string, value: any) => void,
  handleNext: () => void
  handlePrev: () => void
}

const validateUserInterests = (form: any): boolean => {

  return true;
}

const UserInterests = ({step, form, updateFormField, handleNext, handlePrev}: UserInterestProps) => {
  const { interests } = form;

  const handleOnNextPress = () => {
    const valid: boolean = validateUserInterests(form);
    if (!valid) {
      console.log("BAD!")
    } else {
      handleNext();
    }
  }

  return (
    <View style={[{...formStyles}]}>
      {/* <TextInput 
        label="Location" 
        placeholder='City, State' 
        value={location}
        onChange={(value) => updateFormField("location", value)}
      /> */}
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
          text="Review"
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

export default UserInterests;