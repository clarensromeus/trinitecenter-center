import * as React from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import { useRouter, Router } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import useLotteryStore from "@/store/ProviderData";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const insets = useSafeAreaInsets();

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
    <View style={{ flex: 1, width: "100%", backgroundColor: "#f5f5f5" }}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={50} animating={true} color="#651fff" />
        </View>
      ) : (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
          {/* Scrollable content */}
          <ScrollView contentContainerStyle={styles.firstContent}>
            {tirages.map((tirage, index) => (
              <Pressable
                key={index}
                style={[
                  styles.cardContainer,
                  tirage.isSelected && styles.selectedCard,
                ]}
                onPress={() => selectDataChange(tirage.tirage)}
                android_ripple={{ color: "rgba(101, 31, 255, 0.1)" }}
              >
                <View style={styles.tirage}>
                  <Text
                    style={[
                      styles.tirageTitle,
                      tirage.isSelected && styles.selectedText,
                    ]}
                  >
                    Tirage {tirage.tirage}
                  </Text>
                  <Text
                    style={[
                      styles.tirageInfo,
                      tirage.isSelected && styles.selectedText,
                    ]}
                  >
                    Ouverture: {tirage.midi} | Fermeture {tirage.soir}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>

          {/* Fixed button at the bottom */}
          <View style={styles.secondContent}>
            <Button
              disabled={isDisabled}
              mode="contained"
              onPress={navigateTo}
              uppercase
              buttonColor="#651fff"
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              Continuer
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
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  firstContent: {
    padding: 16,
    gap: 12,
    paddingBottom: 24,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
  },
  selectedCard: {
    backgroundColor: "#651fff",
    transform: [{ scale: 1.02 }],
  },
  tirage: {
    padding: 16,
  },
  tirageTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  tirageInfo: {
    fontSize: 16,
    color: "#666",
    textTransform: "uppercase",
  },
  selectedText: {
    color: "white",
  },
  secondContent: {
    padding: 16,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  button: {
    borderRadius: 8,
    height: 48,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
