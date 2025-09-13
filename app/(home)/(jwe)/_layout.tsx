import { Stack } from "expo-router";
import * as React from "react";
import { View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Menu, Text } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { RechercherTike } from "@/components/dialog/rechercheTike";
import { useRouter, Router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CalendarDateTime,
  Time,
  getLocalTimeZone,
  toCalendarDateTime,
  today,
  now,
} from "@internationalized/date";
import useLotteryStore from "@/store/ProviderData";
import {
  accessTirage,
  blockageBoule,
  createFiche,
  findOneuser,
  getUserData,
  limitBouleParAgent,
  limiteBoule,
  limiteJeu,
  limiteJeuParAgent,
} from "@/components/Lottery/logics";
import DialogMessage from "@/components/Lottery/dialog";
import __ from "lodash";
import MontantDialog from "@/components/Lottery/montantAutomatique";
import { IconButton } from 'react-native-paper';
import RetounenHeaderButton from "@/components/retounen";
import MenuForPlay from "@/components/MenuForplay";



const MemoizedRechercherTike = React.memo(RechercherTike);
const MemoizedDialogMessage = React.memo(DialogMessage);


export default function Homelayourt() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visibleMenu, setVisibleMenu] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const [visibleMessage, setVisibleMessage] = React.useState<boolean>(false);
  const [isEl, setEl] = React.useState<boolean>(false);
  const [visibleM, setVisibleM] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);
  const {
    Borlette,
    Lotto3,
    Lotto4,
    Lotto5,
    Mariage,
    Tirage,
    addReload,
    addMariage,
    ClearBorlette,
    ClearLotto3,
    ClearLotto4,
    ClearLotto5,
    clearMariage,
  } = useLotteryStore((state) => ({
    Borlette: state.Borlette,
    Lotto3: state.Lotto3,
    Lotto4: state.Lotto4,
    Lotto5: state.Lotto5,
    Mariage: state.Mariage,
    Tirage: state.Tirage,
    addReload: state.addReload,
    addMariage: state.addMariage,
    ClearBorlette: state.clearBorlette,
    ClearLotto3: state.clearLotto3,
    ClearLotto4: state.clearLotto4,
    ClearLotto5: state.clearLotto5,
    clearMariage: state.clearMariage,
  }));

  const router: Router = useRouter();

  const showDialog = () => {
    setVisible(true);
  };

  const openMenu = () => setVisibleMenu(true);

  const closeMenu = () => setVisibleMenu(false);

  const Jwe = React.useCallback(async () => {
    try {
      setError(false);
      setVisibleMessage(true);
      setLoading(true);
      setMessage("Pran yon ti pasyans pandan fich la ap trete");

      const Today = today(getLocalTimeZone());
      const time = now(getLocalTimeZone());
      const calendarDate = new CalendarDateTime(
        Today.year,
        Today.month,
        Today.day
      );
      const date = toCalendarDateTime(
        calendarDate,
        new Time(time.hour, time.minute, time.second)
      );

      const vendeur = await getUserData();
      const user = await findOneuser(`${vendeur.id}`);
      const totalBorlette = Borlette.concat(Lotto3, Lotto4, Lotto5, Mariage);
      const boules = totalBorlette.map((b) => b.numero);
      const montant = totalBorlette.map((b) => b.montant);

      
      if(Boolean(user?.block)) {
        setLoading(false);
        setMessage("Dezole agent, ou pa ka jwe san otorisation administratè a");
        return;
      }
      if (totalBorlette.length === 0) {
        setLoading(false);
        setMessage("fok ou jwe pou piti yon boul, pou ou ka kreye yon fich");
        return;
      }

      const tirage = await accessTirage(Tirage);
      if (tirage.state) {
        setLoading(false);
        setMessage(tirage.message);
        setEl(true);
        return;
      }

      const bb = await blockageBoule(boules, Tirage[0], vendeur.Bank);
      if (bb.state) {
        setLoading(false);
        setMessage(`${bb.data.join(",")}, sorry boule sa (yo) bloke`);
        return;
      }

      const lb = await limiteBoule(boules, montant, Tirage[0]);
      if (lb.state) {
        setLoading(false);
        setMessage(`${lb.data.join(",")}, boule sa (yo) pa ka jwe, kob la twò wo`);
        return;
      }

      const lbpa = await limitBouleParAgent(boules, Tirage[0], vendeur.Bank, montant);
      if (lbpa.state) {
        setLoading(false);
        setMessage(`${lbpa.data.join(",")}, boule sa (yo) pa ka jwe, kob la twò wo`);
        return;
      }

      const lj = await limiteJeu(Tirage[0], totalBorlette);
      if (lj.state) {
        setLoading(false);
        setMessage(lj.message);
        return;
      }

      const ljpa = await limiteJeuParAgent(vendeur.Bank, Tirage[0], totalBorlette);
      if (ljpa.state) {
        setLoading(false);
        setMessage(ljpa.message);
        return;
      }

      const ficheCreation = await createFiche(
        date.toString(),
        totalBorlette,
        Tirage[0].toLowerCase(),
        vendeur.Pseudoname,
        vendeur.Surcussale,
        vendeur.Bank
      );

      if (ficheCreation.state) {
        ClearBorlette();
        ClearLotto3();
        ClearLotto4();
        ClearLotto5();
        clearMariage();
        setMessage("false")
        setVisibleMessage(false)
        setError(false)
        router.navigate("/(home)/(jwe)/confimation");
        await AsyncStorage.setItem(
          "FICHE",
          JSON.stringify({ isCreated: true })
        );
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      setMessage(`Error: ${error instanceof Error ? error.message : "An unknown error occurred"}`);
    } finally {
      setLoading(false);
    }
  }, [Borlette, Lotto3, Lotto4, Lotto5, Mariage, Tirage, router, ClearBorlette, ClearLotto3, ClearLotto4, ClearLotto5, clearMariage]);


  const MenuProps = {
    visibleMenu,
    openMenu,
    closeMenu,
    router,
    styles
  }

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Choisir un ou plusieur options",
          title: "Choisir un ou plusieur options",
          statusBarAnimation: "fade",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#651fff" },
          statusBarColor: "#651fff",
          statusBarStyle: "light",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 22,
            color: "white",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="tirage"
        options={() => {
          const title =
            Tirage.length > 1
              ? `${Tirage[0]} + ${Tirage.length - 1}`
              : Tirage[0];
          return {
            statusBarAnimation: "fade",
            statusBarColor: "#651fff",
            statusBarStyle: "light",
            title: `${__.capitalize(title)}`,
            headerTitle: `${__.capitalize(title)}`,
            headerBackVisible: false,
            headerStyle: { backgroundColor: "#651fff" },
            headerTitleStyle: { color: "white", fontSize: 24 },
            headerShadowVisible: false,
            headerRight: () => {
              return (
                <View style={{ flexDirection: "row", gap: 29 }}>
                  <Pressable onPress={showDialog} hitSlop={20} style={styles.iconButton}>
                    <AntDesign name="search1" size={29} color="white" />
                  </Pressable>
                  <MemoizedRechercherTike visible={visible} setVisible={setVisible} />
                  <Pressable onPress={Jwe} hitSlop={20} style={styles.iconButton}>
                    <AntDesign name="check" size={35} color="white" />
                  </Pressable>
                  <MemoizedDialogMessage
                    isVisible={visibleMessage}
                    isLoading={loading}
                    setVisible={setVisibleMessage}
                    Message={message}
                    El={isEl}
                  />
                  <MenuForPlay {...MenuProps} />
                </View>
              );
            },
          };
        }}
      />
      <Stack.Screen
        name="[code]"
        options={({ route }: { route: any }) => {
          return {
            headerTitle: `FICH :  ${route.params.code}`,
            title: `Fich : ${route.params.code}`,
            headerStyle: { backgroundColor: "#651fff" },
            headerShadowVisible: false,
            headerTitleStyle: { fontSize: 20, color: "white" },
            statusBarAnimation: "fade",
            statusBarColor: "#651fff",
            statusBarStyle: "light",
            headerBackVisible: false,
          };
        }}
      />
      <Stack.Screen
        name="confimation"
        options={{
          title: "Excellence Center",
          headerTitle: "Excellence Center",
          statusBarAnimation: "fade",
          statusBarColor: "#651fff",
          statusBarStyle: "light",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#651fff" },
          headerTitleStyle: { color: "white", fontSize: 26, fontFamily: "monospace" },
          headerShadowVisible: false,
          headerRight: () => {
            return (
              // <TouchableOpacity
              //   onPress={() => router.replace("/(home)/(jwe)/")}
              // >
              //   <Text style={{ color: "#4caf50", fontSize: 21 }}>Rejwe</Text>
              // </TouchableOpacity>
              <RetounenHeaderButton/>
            );
          },
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
  headerTitle: {
    flexDirection: "row",
  },
  iconButton: {
    padding: 8,
  },
});
