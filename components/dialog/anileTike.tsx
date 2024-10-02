import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Dialog from "react-native-dialog";
import { suprimerFiche } from "../Lottery/logics";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function AnileTike({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [finish, setFinish] = React.useState<boolean>(false);
  const [kod, setKod] = React.useState<string>("");

  const handleCancel = () => {
    setVisible(false);
  };

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("VENDEUR");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      throw new Error(`${e}`);
    }
  };

  const suprimer = async (code: string) => {
    try {
      const user = await getUserData();
      setFinish(true);
      const suprim = await suprimerFiche(code);
      if (suprim.state == false) {
        setFinish(false);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Nouveau Fiche!",
          textBody: `Agent ${user.Pseudoname} ${suprim.message}`,
        });
        setVisible(false);
      } else {
        setFinish(false);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Avestisman sou fich la!",
          textBody: `Agent ${user.Pseudoname} ${suprim.message}`,
        });
        setVisible(false);
      }
    } catch (error) {
      setFinish(false);
      throw new Error(`${error}`);
    }
  };

  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Anile Fiche la</Dialog.Title>
      <Dialog.Description>
        {finish ? (
          <View style={styles.loading}>
            <ActivityIndicator animating={true} size={40} color="" />
          </View>
        ) : (
          "Nimero tiké ou vle anile"
        )}
      </Dialog.Description>
      {!finish && (
        <Dialog.Input
          placeholder="Entre kod la"
          onChangeText={(text) => setKod(text)}
        />
      )}
      <Dialog.Button
        style={{ textTransform: "uppercase" }}
        label="Anilé"
        color={"red"}
        onPress={handleCancel}
      />
      <Dialog.Button
        label="Ok"
        style={{ textTransform: "uppercase" }}
        color={"#651fff"}
        onPress={() => {
          suprimer(kod);
        }}
      />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    paddingLeft: 20,
  },
});
