import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({ 
    Lexend: require('../assets/fonts/Lexend.ttf'),
    Inter: require('../assets/fonts/Inter.ttf'),
  });

  // Hide the splash screen once fonts are loaded or an error occurs
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return null or a loading component while fonts are not yet loaded
  if (!fontsLoaded && !fontError) {
    return null; 
  }

  return <Stack onLayout={onLayoutRootView} />;
}
