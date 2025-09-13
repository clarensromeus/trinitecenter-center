import React from "react";
import { View, Pressable } from "react-native";
import { Menu, Text, useTheme } from "react-native-paper";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function MyMenu({ isVisible, openMenu, closeMenu, updateAuth }: any) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Menu
      contentStyle={{
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 10,
      }}
      visible={isVisible}
      onDismiss={closeMenu}
      anchor={
        <Pressable hitSlop={20} onPress={openMenu}>
          <Entypo name="dots-three-vertical" size={26} color="white" />
        </Pressable>
      }
    >
      <Menu.Item
        onPress={() => {
          router.push("/(home)/(jwe)/confimation");
          closeMenu();
        }}
        title={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="list-alt"
              size={20}
              color={theme.colors.primary}
            />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>
              Listes des tikets
            </Text>
          </View>
        }
      />

      <Menu.Item
        onPress={async () => {
          try {
            await AsyncStorage.setItem("isLoggedIn", "false");
            router.replace("/")
            closeMenu();
          } catch (error) {
            console.error(error);
          }
        }}
        title={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="logout"
              size={20}
              color={theme.colors.error}
            />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>Déconnexion</Text>
          </View>
        }
      />
    </Menu>
  );
}
