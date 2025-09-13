import * as React from "react";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import { Card, Text } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter, Router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import Message from "@/components/dialog/Message";
import { adminInfo } from "@/components/administrator";
import useLotteryStore from "@/store/ProviderData";
import { AllbouleDialog } from "@/components/dialog/AllBoulesDialog";

interface Iuser {
  Pseudoname: string;
  NumeroTelephone: string;
  Ville: string;
  Pays: string;
  AddresseComplet: string;
  block: boolean;
}

export default function HomeScreen() {
  const router: Router = useRouter();
  const [userInfo, setUserInfo] = React.useState<Iuser>({} as Iuser);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [centralNumber, setCentralNumber] = React.useState<string>("");
  const [visibleBouleDialog, setVisibleBouleDialog] = React.useState<boolean>(false)

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("LOGIN");
      return jsonValue != null ? JSON.parse(jsonValue).isConnected : null;
    } catch (e) {
      // error reading value
      throw new Error(`${e}`);
    }
  };

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("VENDEUR");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      throw new Error(`${e}`);
    }
  };

  React.useEffect(() => {
    const data = getData();
    const showMessage = async () => {
      try {
        const vendeur = await getUserData();
        setUserInfo({
          Pseudoname: vendeur.Pseudoname,
          NumeroTelephone: vendeur.NumeroTelephone,
          Ville: vendeur.Ville,
          Pays: vendeur.Pays,
          AddresseComplet: vendeur.AddresseComplet,
          block: vendeur.block,
        });
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Bienvenue!",
          textBody: `Ou konekte avec success ${vendeur.Pseudoname} 👏`,
        });
        AsyncStorage.removeItem("LOGIN");
      } catch (error) {
        throw new Error(`${error}`);
      }
    };

    const showSurcuData = async () => {
      try {
        const vendeur = await getUserData();
        await adminInfo(`${vendeur.Surcussale}`, setCentralNumber);
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    if (data != null) {
      showMessage();
    }
    showSurcuData();
  }, []);

  const { clearBorlette, clearLotto3, clearLotto5, clearLotto4, clearMariage } =
    useLotteryStore((state) => ({
      clearBorlette: state.clearBorlette,
      clearLotto3: state.clearLotto3,
      clearLotto4: state.clearLotto4,
      clearLotto5: state.clearLotto5,
      clearMariage: state.clearMariage,
    }));

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <View style={styles.firstContent}>
          <View style={styles.firstContentWrapper}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <FontAwesome name="ticket" size={28} color="white" style={{ marginRight: 12 }} />
              <Text style={{ fontSize: 28, color: "white", fontWeight: "700" }}>
                {userInfo.Pseudoname ? userInfo.Pseudoname.split(" ")[0] : ""}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
              <Ionicons name="location-outline" size={20} color="white" style={{ marginRight: 8, opacity: 0.9 }} />
              <Text style={{ fontSize: 18, color: "white", opacity: 0.9, fontWeight: '500' }}>
                {userInfo.Pays} • Agent Lotterie
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="home-outline" size={18} color="white" style={{ marginRight: 8, opacity: 0.8 }} />
              <Text style={{ fontSize: 16, color: "white", opacity: 0.8, fontWeight: '400' }}>
                {userInfo.AddresseComplet}
              </Text>
            </View>
          </View>
          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Card>
                <Card.Content>
                  <View style={styles.cardContent}>
                    <View style={styles.carditems}>
                      <FontAwesome
                        name="user-circle"
                        size={32}
                        color="#651fff"
                      />
                      <View style={styles.cardItemRight}>
                        <Text variant="headlineSmall" style={{ color: "#333", fontWeight: "600" }}>
                          {userInfo.Pseudoname}
                        </Text>
                        <Text style={{ color: "#666" }}>Responsab</Text>
                      </View>
                    </View>
                    <View style={styles.carditems}>
                      <Foundation name="telephone" size={32} color="#651fff" />
                      <View style={styles.cardItemRight}>
                        <Text
                          variant="headlineSmall"
                          style={[styles.cardItemPhone, { fontWeight: "600" }]}
                        >
                          {userInfo.NumeroTelephone}
                        </Text>
                        <Text style={{ color: "#666" }}>Téléphone Responsab</Text>
                      </View>
                    </View>
                    <View style={styles.carditems}>
                      <Foundation name="telephone" size={32} color="#651fff" />
                      <View style={styles.cardItemRight}>
                        <Text
                          variant="headlineSmall"
                          style={[styles.cardItemPhone, { fontWeight: "600" }]}
                        >
                          {centralNumber}
                        </Text>
                        <Text style={{ color: "#666" }}>Téléphone Central</Text>
                      </View>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            </View>
          </View>
        </View>

        <View style={styles.secondContentWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.firstButton,
              { opacity: pressed ? 0.8 : 1 }
            ]}
            onPress={() => {
               setVisibleBouleDialog(true)
            }}
          >
            <Ionicons name="copy-outline" size={28} color="#651fff" />
            <Text
              variant="headlineSmall"
              style={{
                textTransform: "uppercase",
                color: "#651fff",
                fontSize: 18,
                fontWeight: "600"
              }}
            >
              Jwe
            </Text>
          </Pressable>
          <AllbouleDialog visible={visibleBouleDialog} setVisible={setVisibleBouleDialog} />
          <Pressable
            style={({ pressed }) => [
              styles.secondButton,
              { opacity: pressed ? 0.8 : 1 }
            ]}
            onPress={() => {
              router.push("/(home)/(jwe)");
            }}
          >
            <AntDesign name="plus" size={28} color="white" />
            <Text
              variant="headlineSmall"
              style={{
                textTransform: "uppercase",
                color: "white",
                fontSize: 18,
                fontWeight: "600"
              }}
            >
              Kreye
            </Text>
          </Pressable>
        </View>
        <Message Message="okay, il se lance avec success" isVisible={visible} setVisible={setVisible} />
      </View>
    </AlertNotificationRoot>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#f8f9fa"
  },
  firstContent: { 
    width: "100%",
    position: "relative",
    zIndex: 1
  },
  firstContentWrapper: {
    gap: 12,
    paddingHorizontal: 24,
    // paddingVertical: 0,
    paddingTop: 10,
    paddingBottom: 50,
    backgroundColor: "#651fff",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardWrapper: {
    width: "100%",
    marginTop: -30,
    paddingHorizontal: 20,
    position: "relative",
    zIndex: 2
  },
  card: {
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 8,
    backgroundColor: "white",
    overflow: "hidden"
  },
  cardContent: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    display: "flex",
    gap: 20,
  },
  carditems: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e9ecef"
  },
  cardItemRight: {
    gap: 6,
  },
  cardItemPhone: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "#651fff",
    fontWeight: "600"
  },
  secondContentWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  firstButton: {
    flex: 1,
    margin: 4,
    borderColor: "#651fff",
    borderStyle: "solid",
    flexDirection: "row",
    borderWidth: 2,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "#651fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  secondButton: {
    flex: 1,
    margin: 4,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#651fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    shadowColor: "#651fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
