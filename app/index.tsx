import React, { useState, useEffect } from "react";
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
import * as Network from "expo-network";

export interface IAppProps {}

export default function LoginScreen() {
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
  const [ipAdd, setIpAdd] = React.useState<string>("");

  const router: Router = useRouter();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") {
        router.replace("/(home)");
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  const connecter = async () => {
    try {
      const q = query(
        collection(db, "Vendeur"),
        where("Pseudoname", "==", info.Pseudoname),
        where("MotDePasse", "==", info.MotDePasse)
      );
      setLoading(true);

      const querySnapshots = await getDocs(q);
      if (querySnapshots.empty) {
        setLoading(false);
        setFinish(true);
      } else {
        querySnapshots.docs.map((doc) => {
          AsyncStorage.setItem("VENDEUR", JSON.stringify({...doc.data(), id: doc.id}));
          AsyncStorage.setItem("isLoggedIn", "true");
          router.replace("/(home)");
          setLoading(false);
        });
      }
    } catch (error) {
      setFinish(true);
      setLoading(false);
      throw new Error(`${error}`);
    }
  };

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

  React.useEffect(() => {
    const IPAddress = async () => {
      try {
        const IP = await Network.getIpAddressAsync();
        setIpAdd(IP);
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    IPAddress();
  }, []);

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/Excellence.png")}
            style={styles.Logo}
          />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.titleContainer}>
            <Text variant="headlineMedium" style={styles.titleText}>Bienvenue 👏!</Text>
            <Text variant="titleMedium" style={styles.subtitleText}>Connecter et continuer</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              label="Pseudoname"
              value={info.Pseudoname}
              mode="outlined"
              outlineColor="#651fff"
              activeOutlineColor="#651fff"
              left={<TextInput.Icon icon="account" color="#651fff" />}
              onChangeText={(text) =>
                setInfo((f) => ({ ...f, Pseudoname: text }))
              }
              style={styles.input}
            />
            <TextInput
              label="Mot De Passe"
              secureTextEntry={visible ? true : false}
              value={info.MotDePasse}
              mode="outlined"
              outlineColor="#651fff"
              activeOutlineColor="#651fff"
              left={<TextInput.Icon icon="lock" color="#651fff" />}
              onChangeText={(text) =>
                setInfo((f) => ({ ...f, MotDePasse: text }))
              }
              right={
                <TextInput.Icon
                  icon={visible ? "eye" : "eye-off"}
                  color="#651fff"
                  onPress={() => {
                    setVisible((old) => !old);
                  }}
                />
              }
              style={styles.input}
            />
          </View>
          <View style={styles.remember}>
            <Checkbox
              color="#651fff"
              status={check ? "checked" : "unchecked"}
              onPress={() => setCheck((old) => !old)}
            />
            <Text variant="titleMedium" style={styles.rememberText}>
              se souvenir de moi
            </Text>
          </View>
          <View style={styles.submit}>
            <Button 
              mode="contained" 
              buttonColor="#651fff" 
              onPress={connecter}
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              {isLoading ? (
                <ActivityIndicator animating={true} color="white" />
              ) : (
                "Se Connecter"
              )}
            </Button>
          </View>
          <View style={styles.forgotPassword}>
            <Text variant="labelLarge" style={styles.forgotText}>Mot De Passe Oublié?</Text>
            <Link style={styles.RegisterTextLink} href={"/"}>
              Récuper
            </Link>
          </View>
          <View style={styles.divider}>
            <View style={styles.leftLine} />
            <Text variant="labelSmall" style={styles.orText}>OR</Text>
            <View style={styles.rightLine} />
          </View>
          <View style={styles.googleButton}>
            <Button
              mode="outlined"
              style={styles.googleButtonContainer}
              contentStyle={styles.googleButtonContent}
            >
              <Image
                source={require("../assets/images/googleIcon.png")}
                style={styles.googleIcon}
              />
              <Text variant="labelLarge" style={styles.googleText}>
                se connecter avec google
              </Text>
            </Button>
          </View>
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
    backgroundColor: "#f5f5f5",
    padding: 20
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: "center"
  },
  Logo: {
    width: 120,
    height: 120,
    resizeMode: "cover"
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  titleText: {
    color: "#651fff",
    fontWeight: "bold"
  },
  subtitleText: {
    color: "#666",
    marginTop: 5
  },
  form: {
    width: "100%",
    gap: 15
  },
  input: {
    backgroundColor: "white"
  },
  remember: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  rememberText: {
    color: "#666",
    marginLeft: 5
  },
  submit: {
    marginTop: 20,
    width: "100%"
  },
  button: {
    borderRadius: 8,
    height: 48
  },
  buttonContent: {
    height: 48
  },
  forgotPassword: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    gap: 5
  },
  forgotText: {
    color: "#666"
  },
  RegisterTextLink: {
    color: "#651fff",
    textDecorationLine: "underline"
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },
  leftLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  rightLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  orText: {
    marginHorizontal: 10,
    color: "#666",
    textTransform: "uppercase"
  },
  googleButton: {
    width: "100%"
  },
  googleButtonContainer: {
    borderColor: "rgba(0, 0, 255, 0.2)",
    borderWidth: 1,
    borderRadius: 8
  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    gap: 10
  },
  googleIcon: {
    width: 24,
    height: 24
  },
  googleText: {
    color: "#666",
    fontWeight: "500",
  }
});
