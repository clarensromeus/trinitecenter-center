import * as React from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loginStatus = await AsyncStorage.getItem("isLoggedIn");
        setIsLoggedIn(loginStatus === "true");
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || isLoggedIn === null) {
    return null;
  }

  return (
    <PaperProvider>
      <Stack screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen
            name="(home)"
            options={{
              headerShown: false,
              title: ""
            }}
          />
        ) : (
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              title: ""
            }}
          />
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
