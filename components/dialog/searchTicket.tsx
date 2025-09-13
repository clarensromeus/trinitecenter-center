import * as React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Dialog from "react-native-dialog";
import {
  ActivityIndicator,
  Text,
  TextInput,
  IconButton,
  Button,
  Card,
} from "react-native-paper";
import { accessTirage, blockageBoule, findOneuser, getUserData, limitBouleParAgent, limiteBoule, limiteJeu, limiteJeuParAgent, rechercheFiche } from "../Lottery/logics";
import { useRouter } from "expo-router"
import { createFiche } from "../Lottery/logics";
import { CalendarDateTime, getLocalTimeZone, now ,Time, toCalendarDateTime, today } from "@internationalized/date";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SearchTicketProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TicketData {
  Agent: string;
  Code: string;
  Bank: string;
  dateCreated: string;
  Lottery: Array<{
    borlette: string;
    montant: string;
    numero: string;
    option: string;
  }>;
  Tirage: string;
  Surcussale: string;
}

export function SearchTicket({ visible, setVisible }: SearchTicketProps) {
  const [searchId, setSearchId] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [ticketData, setTicketData] = React.useState<TicketData | null>(null);
  const [errorCreation, setErrorCreation] = React.useState<boolean>(false)
  const [edit, setEdit] = React.useState<boolean>(false)

  const [isEditing, setIsEditing] = React.useState(false);
  const [newTirage, setNewTirage] = React.useState("");
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [loadingRejwe, setloadingRejwe] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>("")
  

  const router = useRouter()

  React.useEffect(() => {
    if (ticketData?.Tirage) {
      setNewTirage(ticketData.Tirage);
    }
  }, [ticketData]);

  const handleCancel = () => {
    setVisible(false);
    setSearchId("");
    setTicketData(null);
    setError("");
    setIsEditing(false);
    setEdit(false)
    setMessage("")
  };

  const handleSearch = async () => {
    if (searchId.length !== 7) {
      setError("Please enter exactly 7 characters");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const result = await rechercheFiche(searchId);

      if (result.state === true && result.data) {
        setTicketData(result.data);
        setNewTirage(result.data.Tirage);
      } else {
        setError("Pas de ticket trouvé");
        setTicketData(null);
      }
    } catch (error) {
      setError("An error occurred while searching");
    } finally {
      setLoading(false);
    }
  };

  const Jwe = async () => {
    try {
      // setErrorCreation(false);
      // setVisibleMessage(true);
      setloadingRejwe(true);
      setMessage("");

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
      const user = await findOneuser(`${vendeur.id}`)
      if(ticketData == null || undefined) return;

      const boules = ticketData.Lottery.map((b) => b.numero);
      const montant = ticketData.Lottery.map((b) => b.montant);
      if(Boolean(user?.block)) {
        setloadingRejwe(false)
        setMessage("Desole agent, ou pa ka jwe san otorisation")
      }
      const tirage = await accessTirage([`${ticketData.Tirage}`]);
      if (tirage.state) {
        setloadingRejwe(false);
        setMessage(tirage.message);
        return;
      }

      const bb = await blockageBoule(boules, `${ticketData?.Tirage}`, vendeur.Bank);
      if (bb.state) {
        setloadingRejwe(false);
        setMessage(`${bb.data.join(",")}, sorry boule sa (yo) bloke`);
        return;
      }

      const lb = await limiteBoule(boules, montant, `${ticketData?.Tirage}`);
      if (lb.state) {
        setloadingRejwe(false);
        setMessage(`${lb.data.join(",")}, boule sa (yo) pa ka jwe, kob la twò wo`);
        return;
      }

      const lbpa = await limitBouleParAgent(boules, `${ticketData?.Tirage}`, vendeur.Bank, montant);
      if (lbpa.state) {
        setloadingRejwe(false);
        setMessage(`${lbpa.data.join(",")}, boule sa (yo) pa ka jwe, kob la twò wo`);
        return;
      }

      const lj = await limiteJeu(`${ticketData?.Tirage}`, ticketData.Lottery);
      if (lj.state) {
        setloadingRejwe(false);
        setMessage(lj.message);
        return;
      }

      const ljpa = await limiteJeuParAgent(vendeur.Bank, `${ticketData?.Tirage}`, ticketData.Lottery);
      if (ljpa.state) {
        setloadingRejwe(false);
        setMessage(ljpa.message);
        return;
      }
    
      const ficheCreation = await createFiche(
        date.toString(),
        ticketData.Lottery,
        `${newTirage.toLowerCase()}`,
        vendeur.Pseudoname,
        vendeur.Surcussale,
        vendeur.Bank
      );

      if (ficheCreation.state) {
        router.navigate("/(home)/(jwe)/confimation");
        await AsyncStorage.setItem(
          "FICHE",
          JSON.stringify({ isCreated: true })
        );
        
      }
    } catch (error) {
      setErrorCreation(true);
      setloadingRejwe(false);
      setMessage(`Error: ${error instanceof Error ? error.message : "An unknown error occurred"}`);
    } finally {
      setloadingRejwe(false);
    }
  }


  const handleSaveTirage = () => {
    if (ticketData) {
      setTicketData({ ...ticketData, Tirage: newTirage });
      setEdit(true)
      setIsEditing(false);
    }
  };

  const tirageOptions = [
    "Florida midi",
    "Florida soir",
    "New york midi",
    "New york soir",
    "Georgia midi",
    "Georgia soir",
  ];

  const loadingDecision = loadingRejwe ? (
    <View style={{display: "flex", gap: 1, flexDirection: "row"}}>
      <Text style={{color: "white"}} >Loading</Text>
      <ActivityIndicator size="small" color="white" />
    </View>
  ) : "Rejouer"
    

  return (
    <Dialog.Container visible={visible} contentStyle={styles.dialogContainer}>
      <Dialog.Title style={styles.title}>Rechercher un ticket</Dialog.Title>

      <View style={styles.searchContainer}>
        <TextInput
          mode="outlined"
          label="Ticket Code"
          keyboardType="numeric"
          value={searchId}
          onChangeText={(text) => {
            setSearchId(text.slice(0, 7));
            setError("");
          }}
          maxLength={7}
          style={styles.input}
          theme={{ colors: { primary: "#651fff" } }}
        />
      </View>

      <View style={{ maxHeight: 350 }}>
        <ScrollView>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          {message.length > 2 ? <Text style={styles.error}>{message}</Text> : null}

          {loading ? (
            <ActivityIndicator style={styles.loader} color="#651fff" />
          ) : ticketData ? (
            <View style={styles.resultContainer}>
              <View style={styles.headerInfo}>
                <View style={styles.row}>
                  <Text style={styles.headerText}>Tirage:</Text>
                  {isEditing ? (
                    <>
                      <TouchableOpacity
                        onPress={() => setPickerVisible(true)}
                        style={styles.pickerButton}
                      >
                        <Text>{newTirage || "Choisir"}</Text>
                      </TouchableOpacity>

                      <IconButton
                        icon="check"
                        size={20}
                        onPress={handleSaveTirage}
                        iconColor="#4caf50"
                      />
                      <IconButton
                        icon="close"
                        size={20}
                        onPress={() => setIsEditing(false)}
                        iconColor="#e53935"
                      />

                      {/* Modern Picker Dialog */}
                      <Dialog.Container
                        visible={pickerVisible}
                        onBackdropPress={() => setPickerVisible(false)}
                        contentStyle={styles.pickerDialog}
                      >
                        <Dialog.Title>Choisir un Tirage</Dialog.Title>
                        <Card style={styles.card}>
                          {tirageOptions.map((option) => (
                            <TouchableOpacity
                              key={option}
                              style={styles.optionButton}
                              onPress={() => {
                                setNewTirage(option);
                                setPickerVisible(false);
                              }}
                            >
                              <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                          ))}
                        </Card>
                        <Button
                          mode="outlined"
                          icon="close"
                          onPress={() => setPickerVisible(false)}
                          style={{ marginTop: 10 }}
                        >
                          Close
                        </Button>
                      </Dialog.Container>
                    </>
                  ) : (
                    <View style={styles.row}>
                      <Text style={styles.tirageValue}>{ticketData.Tirage}</Text>
                      <IconButton
                        icon="pencil"
                        size={18}
                        onPress={() => setIsEditing(true)}
                        iconColor="#651fff"
                      />
                    </View>
                  )}
                </View>

                <Text style={styles.headerText}>Agent: {ticketData.Agent}</Text>
                <Text style={styles.headerText}>
                  Date: {ticketData.dateCreated.replace("T", " ")}
                </Text>
              </View>

              <View style={styles.ticketList}>
                {ticketData.Lottery.map((item, index) => (
                  <View key={index} style={styles.ticketItem}>
                    <Text style={styles.itemText}>Numero: {item.numero}</Text>
                    <Text style={styles.itemText}>Option: {item.option}</Text>
                    <Text style={styles.itemText}>Montant: {item.montant}</Text>
                    <Text style={styles.itemText}>Type: {item.borlette}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>

      <Dialog.Button
        label="Cancel"
        onPress={handleCancel}
        color="red"
        style={styles.button}
      />
      <Dialog.Button
        label={isEditing || edit ? loadingDecision : "Rechercher"}
        onPress={isEditing || edit ? Jwe : handleSearch}
        color="#651fff"
        style={[styles.button, {backgroundColor: isEditing || edit ? "#651fff": "white", color: isEditing || edit ? "white": "#651fff"}]}
      />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  dialogContainer: {
    maxWidth: "90%",
    width: 400,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    color: "#333",
    fontWeight: "600",
  },
  searchContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: "white",
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
  loader: {
    marginVertical: 20,
  },
  resultContainer: {
    marginVertical: 15,
  },
  headerInfo: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  headerText: {
    fontSize: 16,
    color: "#333",
    marginRight: 5,
    marginBottom: 5,
  },
  tirageValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 4,
  },
  pickerButton: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 5,
  },
  pickerDialog: {
    borderRadius: 10,
    padding: 20,
  },
  card: {
    width: "100%",
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: "#fff",
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: "100%",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  ticketList: {
    gap: 10,
  },
  ticketItem: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    borderLeftWidth: 3,
    borderLeftColor: "#651fff",
    marginBottom: 8,
  },
  itemText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  button: {
    textTransform: "uppercase",
  },
});
