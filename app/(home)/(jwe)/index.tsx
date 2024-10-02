import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import { useRouter, Router } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import useLotteryStore from "@/store/ProviderData";

interface ITirage {
  id: string;
  tirage: string;
  midi: string;
  soir: string;
  isSelected: boolean;
}

export default function JweScreen() {
  const [isDisabled, setDisable] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>();
  const [error, setError] = React.useState<boolean>();
  const router: Router = useRouter();

  const {
    addTirage,
    clearBorlette,
    clearLotto3,
    clearLotto4,
    clearLotto5,
    clearMariage,
  } = useLotteryStore((state) => ({
    addTirage: state.addTirage,
    clearBorlette: state.clearBorlette,
    clearLotto3: state.clearLotto3,
    clearLotto4: state.clearLotto4,
    clearLotto5: state.clearLotto5,
    clearMariage: state.clearMariage,
  }));

  const [tirages, setTirage] = React.useState<ITirage[]>([]);

  const selectDataChange = (name: string) => {
    const filteredData = tirages.find((tirage) => tirage.tirage === name);
    if (filteredData && filteredData.isSelected) {
      setTirage(
        tirages.map((tirage) =>
          tirage.tirage === filteredData.tirage
            ? { ...filteredData, isSelected: false }
            : tirage
        )
      );
      /* const isSelect = tirages.map((tirage) => tirage.isSelected) */

      /* if (isSelect.includes(true)) {
        setDisable(false);
      } else {
        setDisable(true);
      } */
    } else if (filteredData && !filteredData.isSelected) {
      setTirage(
        tirages.map((tirage) =>
          tirage.tirage === filteredData.tirage
            ? { ...filteredData, isSelected: true }
            : tirage
        )
      );
    }
  };

  React.useEffect(() => {
    const allTirage = async () => {
      try {
        const tirageRef = collection(db, "Tirages");
        setLoading(true);
        const q = query(tirageRef, where("Block", "==", "Activé"));
        const tirages = await getDocs(tirageRef);
        if (tirages.empty) {
          setLoading(false);
        }
        const dta = tirages.docs.map((tir) => {
          return {
            id: tir.id,
            tirage: tir.data().Nom,
            midi: tir.data().Ouverture,
            soir: tir.data().fermeture,
            isSelected: false,
          } as ITirage;
        });
        setLoading(false);
        setTirage(dta);
      } catch (error) {
        setLoading(false);
        setError(true);
        throw new Error(`${error}`);
      }
    };

    allTirage();
    clearBorlette();
    clearLotto3();
    clearLotto4();
    clearLotto5();
    clearMariage();
  }, []);

  const navigateTo = () => {
    const alltirage: string[] = tirages
      .filter((tira) => tira.isSelected == true)
      .map((ti) => ti.tirage);

    addTirage(alltirage);
    router.navigate("/(home)/tirage");
  };

  React.useEffect(() => {
    if (tirages) {
      const isSelect = tirages.map((tirage) => tirage.isSelected);
      if (isSelect.includes(true)) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  }, [tirages]);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ActivityIndicator size={40} animating={true} color="blue" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.firstContent}>
            {tirages.map((tirage, index) => {
              return (
                <Pressable
                  key={index}
                  style={{
                    backgroundColor: tirage.isSelected ? "#651fff" : "white",
                  }}
                  onPress={() => {
                    selectDataChange(tirage.tirage);
                  }}
                >
                  <View
                    style={[
                      styles.tirage,
                      {
                        backgroundColor: tirage.isSelected
                          ? "#651fff"
                          : "white",
                        paddingVertical: 7,
                        paddingHorizontal: 10,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: 18,
                        color: tirage.isSelected ? "white" : "#651fff",

                        fontWeight: "bold",
                      }}
                    >
                      Tirage {tirage.tirage}
                    </Text>
                    <Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: 18,
                        color: tirage.isSelected ? "white" : "#651fff",
                      }}
                    >
                      Ouverture: {tirage.midi} | Fermeture {tirage.soir}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
          <View style={styles.secondContent}>
            <Button
              disabled={isDisabled}
              mode="contained"
              onPress={navigateTo}
              uppercase
              buttonColor="#651fff"
            >
              ok
            </Button>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  firstContent: {
    marginVertical: 15,
    marginHorizontal: 17,
    gap: 13,
  },
  secondContent: {
    marginHorizontal: 22,
    marginBottom: 18,
  },
  tirage: {
    flexDirection: "column",
  },
  loadingStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
