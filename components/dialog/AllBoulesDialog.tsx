import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import {
  Dialog,
  Portal,
  Text,
  ActivityIndicator,
  Button,
} from "react-native-paper";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import moment from "moment-timezone";
import "moment/locale/fr";

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
  timestamp?: Timestamp;
}

export function AllbouleDialog({ visible, setVisible }: ILottoNumbersProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [numbers, setNumbers] = React.useState<ILotGagnant[]>([]);

  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [showStartPicker, setShowStartPicker] = React.useState(false);
  const [showEndPicker, setShowEndPicker] = React.useState(false);

  const timezone = "America/Port-au-Prince";

  const fetchLotteryNumbers = async () => {
    if (!startDate || !endDate) return;
    setLoading(true);

    try {
      const lotGagnantsRef = collection(db, "lotGagnants");

      const start = moment.tz(startDate, timezone).startOf("day").toDate();
      const end = moment.tz(endDate, timezone).endOf("day").toDate();

      const q = query(
        lotGagnantsRef,
        where("timestamp", ">=", Timestamp.fromDate(start)),
        where("timestamp", "<=", Timestamp.fromDate(end)),
        orderBy("timestamp", "desc")
      );

      const querySnapshot = await getDocs(q);
      const results: ILotGagnant[] = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data() as ILotGagnant);
      });
      setNumbers(results);
    } catch (error) {
      console.error("Error fetching lottery numbers:", error);
    }

    setLoading(false);
  };

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={styles.title}>Les Numéros Gagnants</Dialog.Title>
        <Dialog.Content style={styles.dialogContent}>
          <View style={styles.dateContainer}>
            <Button
              mode="outlined"
              onPress={() => {
                setShowStartPicker(true);
                setShowEndPicker(false);
              }}
              style={styles.dateButton}
            >
              {startDate
                ? `Du ${moment(startDate).format("DD MMM YYYY")}`
                : "Choisir date de début"}
            </Button>

            <Button
              mode="outlined"
              onPress={() => {
                setShowEndPicker(true);
                setShowStartPicker(false);
              }}
              style={styles.dateButton}
            >
              {endDate
                ? `Au ${moment(endDate).format("DD MMM YYYY")}`
                : "Choisir date de fin"}
            </Button>
          </View>

          {(showStartPicker || showEndPicker) && (
            <View style={{ marginVertical: 10 }}>
              <CalendarPicker
                weekdays={[
                  "Dimanche",
                  "Lundi",
                  "Mardi",
                  "Mercredi",
                  "Jeudi",
                  "Vendredi",
                  "Samedi",
                ]}
                months={[
                  "Janvier",
                  "Février",
                  "Mars",
                  "Avril",
                  "Mai",
                  "Juin",
                  "Juillet",
                  "Août",
                  "Septembre",
                  "Octobre",
                  "Novembre",
                  "Décembre",
                ]}
                selectedDayColor="#651fff"
                selectedDayTextColor="#fff"
                onDateChange={(date: Date) => {
                  if (showStartPicker) {
                    setStartDate(date);
                    setShowStartPicker(false);
                  } else if (showEndPicker) {
                    setEndDate(date);
                    setShowEndPicker(false);
                  }
                }}
                width={320}
              />
            </View>
          )}

          <Button
            mode="contained"
            onPress={fetchLotteryNumbers}
            disabled={!startDate || !endDate}
            style={{ marginBottom: 12 }}
          >
            Rechercher
          </Button>

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
                      {moment(lotGagnant.date).format("D MMMM YYYY").replace(
                        /(\d+\s)([a-z])/,
                        (_, d, l) => d + l.toUpperCase()
                      )}
                    </Text>
                    <Text style={styles.tirageText}>{lotGagnant.Tirage}</Text>
                    <View style={styles.numbersRow}>
                      <View style={styles.numberItem}>
                        <Text style={styles.numberLabel}>1er Lot</Text>
                        <Text style={styles.numberValue}>
                          {lotGagnant.Lotto31eLot}
                        </Text>
                      </View>
                      <View style={styles.numberItem}>
                        <Text style={styles.numberLabel}>2ème Lot</Text>
                        <Text style={styles.numberValue}>
                          {lotGagnant.SecondLot}
                        </Text>
                      </View>
                      <View style={styles.numberItem}>
                        <Text style={styles.numberLabel}>3ème Lot</Text>
                        <Text style={styles.numberValue}>
                          {lotGagnant.ThirdLot}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Fermer</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialogContent: {
    maxHeight: 520,
  },
  title: {
    textAlign: "center",
    color: "#651fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  loadingContainer: {
    padding: 20,
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 12,
  },
  dateButton: {
    flex: 1,
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
