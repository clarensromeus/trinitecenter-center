import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Dialog, Portal, Text, ActivityIndicator, Button } from "react-native-paper";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import moment from "moment";
import "moment/locale/fr"

moment.locale("fr");

interface ILottoNumbersProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILotGagnant {
  Lotto31eLot: string;
  SecondLot: string;
  ThirdLot: string;
  Tirage: string;
  date: string;
  dateCreated: string;
}

export function LottoNumbers({ visible, setVisible }: ILottoNumbersProps) {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [numbers, setNumbers] = React.useState<ILotGagnant[]>([]);

  React.useEffect(() => {
    if (visible) {
      fetchLotteryNumbers();
    }
  }, [visible]);

  const fetchLotteryNumbers = async () => {
    try {
      const lotGagnantsRef = collection(db, "lotGagnants");
      const q = query(lotGagnantsRef, orderBy("timestamp", "desc"), limit(6));
      const querySnapshot = await getDocs(q);
      const results: ILotGagnant[] = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data() as ILotGagnant);
      });
      setNumbers(results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching lottery numbers:", error);
      setLoading(false);
    }
  };

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={styles.title}>Les Numeros Gagnants De Lotterie</Dialog.Title>
        <Dialog.Content style={styles.dialogContent}>
          <ScrollView>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#651fff" />
              </View>
            ) : (
              <View style={styles.numbersContainer}>
                {numbers.map((lotGagnant, index) => (
                <View key={index} style={styles.numberCard}>
                  <Text style={styles.dateText}>
                    {moment(lotGagnant.date).format("D MMMM, YYYY").replace(
                       /(\d+\s)([a-z])/, 
                     (_, dayPart, firstLetter) => dayPart + firstLetter.toUpperCase())}
                  </Text>
                  <Text style={styles.tirageText}>{lotGagnant.Tirage}</Text>
                  <View style={styles.numbersRow}>
                    <View style={styles.numberItem}>
                      <Text style={styles.numberLabel}>1er Lot</Text>
                      <Text style={styles.numberValue}>{lotGagnant.Lotto31eLot}</Text>
                    </View>
                    <View style={styles.numberItem}>
                      <Text style={styles.numberLabel}>2eme Lot</Text>
                      <Text style={styles.numberValue}>{lotGagnant.SecondLot}</Text>
                    </View>
                    <View style={styles.numberItem}>
                      <Text style={styles.numberLabel}>3eme Lot</Text>
                      <Text style={styles.numberValue}>{lotGagnant.ThirdLot}</Text>
                    </View>
                  </View>
                </View>
              ))}
              </View>
            )}
          </ScrollView>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Close</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialogContent: {
    maxHeight: 400,
  },
  title: {
    textAlign: "center",
    color: "#651fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  loadingContainer: {
    padding: 20,
    alignItems: "center",
  },
  numbersContainer: {
    gap: 16,
  },
  numberCard: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  tirageText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
    textTransform: "capitalize",
  },
  numbersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  numberItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  numberLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  numberValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#651fff",
  },
});