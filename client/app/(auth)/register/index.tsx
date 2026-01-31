import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Logo from '@/components/Logo'
import Divider from '@/components/Divider'
import ThemedText from '@/components/ThemedText'
import ThemedLink from '@/components/ThemedLink'
import AccountInformation from '@/components/register_steps/AccountInformation'
import ScreenLevelHeader from '@/components/headers/ScreenLevelHeader'
import UserInformation from '@/components/register_steps/UserInformation'
import { RegistrationForm, useRegistrationFormContext } from '@/context/RegistrationContext'

const Register = () => {
  const { form, setForm } = useRegistrationFormContext();
  const { step } = form;
  console.log("FORM", form);

  function updateFormField<K extends keyof RegistrationForm>(
    key: K,
    value: RegistrationForm[K]
  ) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[{...screenStyles}]}
      >

        {/* Absolute logo */}
        <View style={[{...absoluteLogoStyles}]}>
          <Logo
            flexDirection="row"
            gap={8}
            logoWidth={40}
            logoHeight={40}
            typographyPreset="preset4"
            typographyType="header"
            text="Availo"
          />
        </View>

        <ScreenLevelHeader
          alignSelf="flex-start"
          title={getHeaderTitle(step)}
          subtitle={getHeaderSubtitle(step)}
        />
        <Divider />
        {step === 0 && (
          <AccountInformation 
            step={step} 
            form={form} 
            updateFormField={updateFormField}
          />
        )}
        {/* {step === 1 && (
          <UserInformation 
            step={step} 
            form={form} 
            updateFormField={updateFormField}
          />
        )} */}
        <Divider />
        <View style={[{...authFooterStyles}]}>
            <ThemedText>Have an account?</ThemedText>
            <ThemedLink href="/login">Login now!</ThemedLink>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

// STYLES
const screenStyles: any = {
  position: "relative",
  width: "100%",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
const absoluteLogoStyles: any = {
  position: "absolute",
  top: "5%",
  left: "0%",
}
const authFooterStyles: any = {
  display: "flex",
  flexDirection: "row",
  gap: 4
}

const getHeaderTitle = (step: number) => {
  let string;

  switch(step) {
    case 1:
      string = "(2/4) User Information";
      break;
    case 2:
      string = "(3/4) User Location";
      break;
    case 3:
      string = "(4/4) User Interests";
      break;
    default:
      string = "(1/4) Account Information"
  }

  return string;
}

const getHeaderSubtitle = (step: number) => {
  let string;

  switch(step) {
    case 1:
      string = "This will help other users find you!";
      break;
    case 2:
      string = "Help us provide events in your area!";
      break;
    case 3:
      string = "Choose up to 5 interests for your profile.";
      break;
    default:
      string = "This is for your eyes only."
  }

  return string;
}

export default Register;