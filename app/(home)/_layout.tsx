import { Stack } from "expo-router";
import * as React from "react";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import Dialog from "react-native-dialog";
import PeyeTike from "@/components/dialog/peyeTike";
import { Rapo } from "@/components/dialog/rapo";
import ImprimeTike from "@/components/dialog/imprime";
import { Menu } from "react-native-paper";
import { useRouter, Router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnileTike } from "@/components/dialog/anileTike";

export default function Homelayourt() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visiblePeye, setVisiblePeye] = React.useState<boolean>(false);
  const [visibleRapo, setVisibleRapo] = React.useState<boolean>(false);
  const [visibleImprime, setVisibleImprime] = React.useState<boolean>(false);
  const [isVisible, setMenuVisible] = React.useState<boolean>(false);

  const router: Router = useRouter();

  const showDialog = () => {
    setVisible(true);
  };

  const showDialogPeye = () => {
    setVisiblePeye(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);

  const showDialogImprime = () => setVisibleImprime(true);
  const showDialogRapo = () => setVisibleRapo(true);

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerStyle: { backgroundColor: "#651fff" },
          statusBarColor: "#651fff",
          statusBarAnimation: "fade",
          statusBarStyle: "light",
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 27,
            color: "white",
          },
          headerRight: () => {
            return (
              <View style={styles.container}>
                <Pressable onPress={showDialog}>
                  <AntDesign name="closecircleo" size={24} color="white" />
                </Pressable>
                <Pressable onPress={showDialogPeye}>
                  <FontAwesome5 name="dollar-sign" size={24} color="white" />
                </Pressable>
                <Pressable onPress={showDialogImprime}>
                  <Fontisto name="print" size={24} color="white" />
                </Pressable>
                <Pressable onPress={showDialogRapo}>
                  <AntDesign name="calendar" size={24} color="white" />
                </Pressable>
                <Menu
                  contentStyle={{
                    paddingHorizontal: 20,
                    backgroundColor: "white",
                  }}
                  visible={isVisible}
                  onDismiss={closeMenu}
                  anchor={
                    <Pressable onPress={openMenu}>
                      <Entypo
                        name="dots-three-vertical"
                        size={24}
                        color="white"
                      />
                    </Pressable>
                  }
                >
                  <Menu.Item
                    onPress={() => {
                      router.push("/(home)/(jwe)/confimation");
                      closeMenu();
                    }}
                    titleStyle={{ fontSize: 18 }}
                    title="Listes des tike"
                  />
                  <Menu.Item
                    onPress={async () => {
                      try {
                        closeMenu();
                        await AsyncStorage.clear();
                        router.back();
                      } catch (error) {
                        throw new Error(`${error}`);
                      }
                    }}
                    titleStyle={{ fontSize: 18 }}
                    title="Dekonekyon"
                  />
                </Menu>
                <AnileTike visible={visible} setVisible={setVisible} />
                <PeyeTike
                  visiblePeye={visiblePeye}
                  setVisiblePeye={setVisiblePeye}
                />
                <Rapo
                  visibleRapo={visibleRapo}
                  setVisibleRapo={setVisibleRapo}
                />
                <ImprimeTike
                  visibleImprime={visibleImprime}
                  setVisibleImprime={setVisibleImprime}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="(jwe)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
  },
});
