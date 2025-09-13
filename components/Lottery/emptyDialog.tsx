import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Dialog, Portal, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export interface IDialogMessageProps {
  isVisible: boolean;
}

export default function EmptyDialog({ isVisible }: IDialogMessageProps) {
  const router = useRouter();

  return (
    <Portal>
      <Dialog
        visible={isVisible}
        onDismiss={() => router.back()}
        style={styles.dialog}
      >
        <Dialog.Icon
          icon={() => (
            <MaterialIcons name="info-outline" size={40} color="#651fff" />
          )}
        />

        <Dialog.Title style={styles.title}>Pa gen Fich</Dialog.Title>

        <Dialog.Content>
          <Text style={styles.message}>
            Dezole Agent, ou pa gen fich ki anrejistre pou konya.
          </Text>
        </Dialog.Content>

        <Dialog.Actions>
          <Button
            mode="contained"
            onPress={() => router.back()}
            buttonColor="#651fff"
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    color: "#333",
  },
  message: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginTop: 8,
  },
  button: {
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 3
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "600",
  },
});
