import { Stack } from "expo-router";
import * as React from "react";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import PeyeTike from "@/components/dialog/peyeTike";
import { Rapo } from "@/components/dialog/rapo";
import ImprimeTike from "@/components/dialog/imprime";
import { useRouter, Router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnileTike } from "@/components/dialog/anileTike";
import useLotteryStore from "@/store/ProviderData";
import { LottoNumbers } from "@/components/dialog/lottoNumbers";
import { SearchTicket } from "@/components/dialog/searchTicket";
import { DeleteTicket } from "@/components/dialog/deleteTike";
import MyMenu from "@/components/MenuComp";


const MemoizedAnileTike = React.memo(AnileTike);
const MemoizedPeyeTike = React.memo(PeyeTike);
const MemoizedRapo = React.memo(Rapo);
const MemoizedImprimeTike = React.memo(ImprimeTike);
const MemoizedLottoNumbers = React.memo(LottoNumbers);
const MemoizedSearchTicket = React.memo(SearchTicket);
const MemoizedDeleteTicket = React.memo(DeleteTicket);

export default function Homelayourt() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visiblePeye, setVisiblePeye] = React.useState<boolean>(false);
  const [visibleRapo, setVisibleRapo] = React.useState<boolean>(false);
  const [visibleImprime, setVisibleImprime] = React.useState<boolean>(false);
  const [isVisible, setMenuVisible] = React.useState<boolean>(false);
  const [visibleLotto, setVisibleLotto] = React.useState<boolean>(false);
  const [visibleDelete, setVisibleDelete] = React.useState<boolean>(false)
  const [visibleSearch, setVisibleSearch] = React.useState<boolean>(false);
  const router: Router = useRouter();
  const updateAuth = useLotteryStore((state) => state.updateAuth);

  const showDialog = () => {
    setVisible(true);
  };


  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);
  const showDialogRapo = () => setVisibleRapo(true);
  const showLottoNumbers = () => setVisibleLotto(true);

  const menuProps = {
    isVisible,
    openMenu,
    closeMenu,
    updateAuth
  }

  return (
    <Stack screenOptions={{
    }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Excellence",
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
            fontFamily: "monospace",
          },
          headerRight: () => {
            return (
              <View style={styles.container}>
                <Pressable 
                  onPress={() => setVisibleDelete(true)}
                  hitSlop={20}
                  style={styles.iconButton}
                >
                  <AntDesign name="closecircleo" size={24} color="white" />
                </Pressable>
                <MemoizedDeleteTicket visibleDelete={visibleDelete} setVisibleDelete={setVisibleDelete} />
                <Pressable 
                  onPress={() => setVisibleSearch(true)}
                  hitSlop={20}
                  style={styles.iconButton}
                >
                  <FontAwesome5 name="dollar-sign" size={24} color="white" />
                </Pressable>
                <MemoizedSearchTicket visible={visibleSearch} setVisible={setVisibleSearch} />
                {/*  */}
                <Pressable 
                  onPress={showLottoNumbers}
                  hitSlop={20}
                  style={styles.iconButton}
                >
                  <Fontisto name="print" size={24} color="white" />
                </Pressable>
                <MemoizedLottoNumbers visible={visibleLotto} setVisible={setVisibleLotto} />

                <Pressable 
                  onPress={showDialogRapo}
                  hitSlop={20}
                  style={styles.iconButton}
                >
                  <AntDesign name="calendar" size={24} color="white" />
                </Pressable>
                <MyMenu {...menuProps}  />
                <MemoizedAnileTike visible={visible} setVisible={setVisible} />
                <MemoizedPeyeTike
                  visiblePeye={visiblePeye}
                  setVisiblePeye={setVisiblePeye}
                />
                <MemoizedRapo
                  visibleRapo={visibleRapo}
                  setVisibleRapo={setVisibleRapo}
                />
                <MemoizedImprimeTike
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
    gap: 20,
    alignItems: "center",
  },
  iconButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
