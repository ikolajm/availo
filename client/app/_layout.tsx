import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import ThemedView from './components/ThemedView';

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

  return (<ThemedView onLayout={onLayoutRootView}>
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }} 
    />
  </ThemedView>);
}
