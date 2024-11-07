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

  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loginStatus = await AsyncStorage.getItem("LOGIN");
      setIsLoggedIn(loginStatus ? JSON.parse(loginStatus).isConnected : false);
    };

    checkLoginStatus();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (isLoggedIn === null || !loaded) {
    return null; // Show a loading screen while checking login status or loading fonts
  }

  /* if (!loaded) {
    return null;
  } */

  /* return (
    <PaperProvider>
      <Stack screenOptions={{}}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Trinite Center",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 26,
            },
            headerBackVisible: false,
            statusBarHidden: true,
          }}
        />
        <Stack.Screen
          name="(home)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  ); */

  return (
    <PaperProvider>
      <Stack screenOptions={{}}>
        {/* Conditional routing based on login status */}
        {isLoggedIn ? (
          <Stack.Screen
            name="(home)"
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "Trinite Center",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 26,
              },
              headerBackVisible: false,
              statusBarHidden: true,
            }}
          />
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
