import { Image, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Logo from '@/components/Logo'
import Divider from '@/components/Divider'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import ButtonGroupStyles from '@/app/styles/groups/ButtonGroupStyles'
import ThemedText from '@/components/ThemedText'
import ThemedLink from '@/components/ThemedLink'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log("Hell Yeah!", email, password);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                style={[{...screenStyles}]}
            >
                {/* <Image
                    source={require("@/assets/images/availo.png")}
                    style={[{...blurredLogoStyles}]}
                    blurRadius={2}
                /> */}
                <Logo
                    flexDirection="column"
                    gap={8}
                    logoWidth={100}
                    logoHeight={100}
                    typographyPreset="preset4"
                    typographyType="header"
                    text="Welcome to Availo"
                />
                <Divider />
                {/* Form */}
                <View style={[{...formStyles}]}>
                    <TextInput 
                        label="Email" 
                        placeholder='email@website.com' 
                        value={email}
                        onChange={setEmail}
                        keyboardType="email-address"
                    />
                    <TextInput 
                        label="Password" 
                        placeholder='••••••••'
                        value={password}
                        onChange={setPassword}
                        secureTextEntry 
                    />
                    <View style={[{...buttonGroupStyles}]}>
                        <Button
                            onPress={handleSubmit}
                            style={[{width: "auto"}]}
                            type="primary"
                            size="medium"
                            text="Login"
                        />
                    </View>
                </View>
                <Divider />
                <View style={[{...authFooterStyles}]}>
                    <ThemedText>Need an account?</ThemedText>
                    <ThemedLink href="/auth/register">Register now!</ThemedLink>
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
// const blurredLogoStyles: any = {
//     position: "absolute",
//     opacity: .1,
//     width: "100%",
//     height: "100%",
//     left: "55%"
// }
const formStyles: any = {
    width: "100%",
    gap: 8
}
const buttonGroupStyles: any = {
    alignSelf: ButtonGroupStyles.layout.alignSelf,
    gap: ButtonGroupStyles.spacing.gap,
    marginTop: ButtonGroupStyles.spacing.marginTop,
}
const authFooterStyles: any = {
    display: "flex",
    flexDirection: "row",
    gap: 4
  }

export default Login;