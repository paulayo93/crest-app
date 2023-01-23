import { useEffect, useState, useCallback } from "react";
import store from "./src/redux-store/store";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { Merriweather_900Black } from "@expo-google-fonts/merriweather";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import AppNavigator from "./src/navigator/app-navigator";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

let persistor = persistStore(store);

export default function App() {

  let customFonts = {
    Merriweather_900Black,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  };

  const [fontsLoaded] = useFonts(customFonts);


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View>
    //   <Text style={{ marginTop: 50 }}>I am here</Text>
    // </View>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <AppNavigator />
            <View onLayout={onLayoutRootView}/>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );

}
