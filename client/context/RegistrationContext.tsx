import React, { createContext, useContext, useState } from "react";

export type RegistrationForm = {
    email: string,
    password: string,
    confirmPassword: string,
    displayName: string,
    username: string,
    location: string,
    interests: number[],
    step: number,
}

type RegistrationFormContextValue = {
    form: RegistrationForm;
    setForm: React.Dispatch<React.SetStateAction<RegistrationForm>>;
  };

const RegistrationFormContext = createContext<RegistrationFormContextValue | undefined>(undefined);

export function RegistrationFormProvider({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState<RegistrationForm>({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
    username: "",
    location: "",
    interests: [],
    step: 0
  });

  return (
    <RegistrationFormContext.Provider value={{ form, setForm }}>
      {children}
    </RegistrationFormContext.Provider>
  );
}

export function useRegistrationFormContext() {
    const ctx = useContext(RegistrationFormContext);

    if (!ctx) {
        throw new Error(
        "useRegistrationFormContext must be used within RegistrationFormProvider"
        );
    }

    return ctx;
}