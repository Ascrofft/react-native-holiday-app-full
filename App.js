import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

// const queryClient = new QueryClient();

const App = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('./assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('./assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('./assets/fonts/DMSans-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
        await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <NavigationContainer>
        <Stack onLayout={onLayoutRootView} />
    </NavigationContainer>
  );
}

export default App;
