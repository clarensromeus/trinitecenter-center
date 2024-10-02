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
            <Text style={{ fontSize: 20, color: "white" }}>
              {userInfo.Pseudoname ? userInfo.Pseudoname.split(" ")[0] : ""}
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              {userInfo.Pays}#vendeur
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              {userInfo.AddresseComplet}
            </Text>
          </View>
          {/* for card */}
          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Card>
                <Card.Content>
                  <View style={styles.cardContent}>
                    <View style={styles.firstContent}>
                      <View style={styles.carditems}>
                        <FontAwesome
                          name="user-circle"
                          size={27}
                          color="black"
                        />
                        <View style={styles.cardItemRight}>
                          <Text variant="headlineSmall">
                            {userInfo.Pseudoname}
                          </Text>
                          <Text>Responsab</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.carditems}>
                      <Foundation name="telephone" size={28} color="black" />
                      <View style={styles.cardItemRight}>
                        <Text
                          variant="headlineSmall"
                          style={styles.cardItemPhone}
                        >
                          {userInfo.NumeroTelephone}
                        </Text>
                        <Text>Téléphone Responsab</Text>
                      </View>
                    </View>
                    <View style={styles.carditems}>
                      <Foundation name="telephone" size={28} color="black" />
                      <View style={styles.cardItemRight}>
                        <Text
                          variant="headlineSmall"
                          style={styles.cardItemPhone}
                        >
                          {centralNumber}
                        </Text>
                        <Text>Téléphone Central</Text>
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
            style={styles.firstButton}
            onPress={() => {
              clearLotto3();
              clearLotto4();
              clearLotto5();
              clearBorlette();
              clearMariage();
            }}
          >
            <Ionicons name="copy-outline" size={25} color="#651fff" />
            <Text
              variant="headlineSmall"
              style={{
                textTransform: "uppercase",
                color: "#651fff",
                fontSize: 20,
              }}
            >
              Anile Kash{" "}
            </Text>
          </Pressable>
          <Pressable
            style={styles.secondButton}
            onPress={() => {
              userInfo.block
                ? setVisible(true)
                : router.navigate("/(home)/(jwe)");
            }}
          >
            <AntDesign name="adduser" size={25} color="white" />
            <Text
              style={{
                textTransform: "uppercase",
                color: "white",
                fontSize: 20,
              }}
            >
              jwé !
            </Text>
          </Pressable>
          <Message
            setVisible={setVisible}
            isVisible={visible}
            Message={`Agent ${userInfo.Pseudoname} ou pa gen akse pou jwe sou platfom nan`}
          />
        </View>
      </View>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  firstContent: { width: "100%" },
  firstContentWrapper: {
    gap: 5,
    paddingHorizontal: 15,
    backgroundColor: "#651fff",
    paddingBottom: 12,
  },
  cardWrapper: {
    width: "100%",
    marginTop: 20,
  },
  card: {
    marginHorizontal: 15,
  },
  cardContent: {
    width: "100%",
    marginHorizontal: 20,
    display: "flex",
    gap: 23,
  },
  carditems: {
    flexDirection: "row",
    gap: 29,
    alignItems: "center",
  },
  cardItemRight: {
    gap: 0,
  },
  cardItemPhone: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  secondContentWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 7,
  },
  firstButton: {
    width: "42%",
    margin: 8,
    borderColor: "#651fff",
    borderStyle: "solid",
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: "center",
  },
  secondButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    width: "42%",
    margin: 8,
    backgroundColor: "#651fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
