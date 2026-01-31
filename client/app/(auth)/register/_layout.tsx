import { Slot } from "expo-router";
import { RegistrationFormProvider } from "@/context/RegistrationContext";

export default function RegisterLayout() {
    console.log("REGISTER LAYOUT PROVIDER MOUNTED");
    return (
        <RegistrationFormProvider>
        <Slot />
        </RegistrationFormProvider>
    );
}