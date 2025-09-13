import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Dialog from "react-native-dialog";
import { ActivityIndicator, Text, TextInput } from "react-native-paper";
import { rechercheFiche, suprimerFiche } from "../Lottery/logics";

interface DeleteTicketProps {
  visibleDelete: boolean;
  setVisibleDelete: React.Dispatch<React.SetStateAction<boolean>>;
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

export function DeleteTicket({ visibleDelete, setVisibleDelete }: DeleteTicketProps) {
  const [searchId, setSearchId] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [ticketData, setTicketData] = React.useState<TicketData | null>(null);

  const handleCancel = () => {
    setVisibleDelete(false);
    setSearchId("");
    setTicketData(null);
    setError("");
  };

  const handleSearch = async () => {
    if (searchId.length !== 7) {
      setError("Please enter exactly 6 characters");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const result = await suprimerFiche(searchId);
      
      if (result.state == true && result) {
        setTicketData(result.fiche);
      } else {
        setError(`${result.message}`)
        setTicketData(null);
      }
    } catch (error) {
      console.log(`error spot : ${error}`)
      setError("Un erreur s'est produit pendant le traitement");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Container visible={visibleDelete} contentStyle={styles.dialogContainer}>
      <Dialog.Title style={styles.title}>Supprimer un ticket</Dialog.Title>
      
      <View style={styles.searchContainer}>
        <TextInput
          mode="outlined"
          label="Ticket Code"
          value={searchId}
          keyboardType="numeric"
          onChangeText={(text) => {
            setSearchId(text.slice(0, 7));
            setError("");
          }}
          maxLength={7}
          style={styles.input}
          theme={{ colors: { primary: "#651fff" } }}
        />
      </View>
      <View style={{maxHeight: 350}}>
      <ScrollView>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {loading ? (
        <ActivityIndicator style={styles.loader} color="#651fff" />
      ) : ticketData ? (
        <View style={styles.resultContainer}>
        <Text style={styles.error}>Voila! la fiche est supprimé avec succès</Text>
          <View style={styles.headerInfo}>
            <Text style={styles.headerText}>Tirage: {ticketData.Tirage}</Text>
            <Text style={styles.headerText}>Agent: {ticketData.Agent}</Text>
            <Text style={styles.headerText}>Date: {ticketData.dateCreated.replace("T", " ")}</Text>
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
        label="Supprimer"
        onPress={handleSearch}
        color="#651fff"
        style={styles.button}
      />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  dialogContainer: {
    maxWidth: "90%",
    width: 400,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    color: "#333",
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
  },
  loader: {
    marginVertical: 20,
  },
  resultContainer: {
    marginVertical: 15,
  },
  headerInfo: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
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