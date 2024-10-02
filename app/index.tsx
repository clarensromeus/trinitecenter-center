import React, { useState } from "react";
import {
  TextInput,
  Text,
  Button,
  Checkbox,
  ActivityIndicator,
} from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import { Link, useRouter, Router } from "expo-router";
import { collection, getDocs, query, where } from "@firebase/firestore";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "@/firebaseConfig";
// import ThermalPrinterModule from "react-native-thermal-printer";

export interface IAppProps {}

export default function LoginScreen(props: IAppProps) {
  const [info, setInfo] = useState<{
    Pseudoname: string;
    MotDePasse: string;
  }>({
    Pseudoname: "",
    MotDePasse: "",
  });

  const [visible, setVisible] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(true);

  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isFinished, setFinish] = React.useState<boolean>(false);

  const router: Router = useRouter();

  const connecter = async () => {
    try {
      const q = query(
        collection(db, "Vendeur"),
        where("Pseudoname", "==", info.Pseudoname),
        where("MotDePasse", "==", info.MotDePasse)
      );
      setLoading(true);
      /* setTimeout(() => {}, 2000); */
      const querySnapshots = await getDocs(q);
      if (querySnapshots.empty) {
        setLoading(false);
        setFinish(true);
      } else {
        querySnapshots.docs.map((doc) => {
          AsyncStorage.setItem("VENDEUR", JSON.stringify(doc.data()));
          AsyncStorage.setItem("LOGIN", JSON.stringify({ isConnected: true }));
          router.push("/(home)");
          setLoading(false);
        });
      }
    } catch (error) {
      setFinish(true);
      setLoading(false);

      throw new Error(`${error}`);
    }
  };

  /* React.useEffect(() => {
    const showPrinters = async () => {
      try {
        const printers = await ThermalPrinterModule.getBluetoothDeviceList();
        printers.map((devices) => {
          console.log(devices.deviceName, devices.macAddress);
        });
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    showPrinters();
  }, []); */

  React.useEffect(() => {
    if (isFinished) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Error",
        textBody: "sorry, infòmation yo pa bon",
      });
      setFinish(false);
    }
  }, [isFinished]);

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/images/Trinite.png")}
            style={styles.Logo}
          />
        </View>
        <View>
          <Text variant="headlineSmall">Connecter</Text>
        </View>
        <View style={{ height: 20 }}></View>
        <View style={styles.form}>
          <TextInput
            label="Pseudoname"
            value={info.Pseudoname}
            mode="flat"
            left={<TextInput.Icon icon="account" />}
            onChangeText={(text) =>
              setInfo((f) => ({ ...f, Pseudoname: text }))
            }
          />
          <TextInput
            label="Mot De Passe"
            secureTextEntry={visible ? true : false}
            value={info.MotDePasse}
            mode="flat"
            left={<TextInput.Icon icon="lock" />}
            onChangeText={(text) =>
              setInfo((f) => ({ ...f, MotDePasse: text }))
            }
            right={
              <TextInput.Icon
                icon={visible ? "eye" : "eye-off"}
                onPress={() => {
                  setVisible((old) => !old);
                }}
              />
            }
          />
        </View>
        <View style={styles.remember}>
          <Checkbox
            color="#651fff"
            status={check ? "checked" : "unchecked"}
            onPress={() => setCheck((old) => !old)}
          />
          <Text variant="titleMedium" style={{ color: "#616161" }}>
            Se souvenir de moi
          </Text>
        </View>
        <View style={styles.submit}>
          <Button mode="contained" buttonColor="#651fff" onPress={connecter}>
            {isLoading ? (
              <ActivityIndicator animating={true} color="white" />
            ) : (
              "Connecter"
            )}
          </Button>
        </View>
        <View style={styles.account}>
          <Text variant="labelLarge">Oublié votre mot de passe?</Text>
          <Link style={styles.RegisterTextLink} href={"/"}>
            Recuperer
          </Link>
        </View>
        <View style={styles.decisionBar}>
          <View style={styles.leftLine} />
          <View>
            <Text variant="labelSmall">oR</Text>
          </View>
          <View style={styles.rightLine} />
        </View>
        <View style={styles.Google}>
          <Button
            mode="outlined"
            style={{ borderColor: "rgba(0, 0, 255, 0.4)", borderWidth: 0.6 }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 7,
              }}
            >
              <View>
                <Image
                  source={require("../assets/images/googleIcon.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View>
                <Text variant="labelLarge" style={styles.GoogleText}>
                  Connecter Avec Google
                </Text>
              </View>
            </View>
          </Button>
        </View>
      </View>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  submit: {
    display: "flex",
    marginTop: 25,
    width: "90%",
  },
  forgot: {
    alignSelf: "flex-end",
    marginRight: 7,
    paddingBottom: 5,
    color: "#7e57c2",
    textDecorationColor: "#7e57c2",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  Logo: {
    width: 90,
    height: 90,
    resizeMode: "cover",
  },
  remember: {
    width: "94%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  account: {
    alignSelf: "flex-end",
    marginRight: 26,
    display: "flex",
    flexDirection: "row",
    gap: 2,
    backgroundColor: "",
    marginTop: 2,
  },
  decisionBar: {
    width: "90%",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  leftLine: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.3)",
    flexGrow: 1,
  },
  rightLine: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.3)",
  },
  Google: {
    marginTop: 22,
    width: "90%",
  },
  GoogleText: {
    color: "blue",
    fontWeight: "bold",
  },
  RegisterTextLink: {
    color: "#651fff",
    textDecorationColor: "#7e57c2",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textTransform: "capitalize",
  },
});
