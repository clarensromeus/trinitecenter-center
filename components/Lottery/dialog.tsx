import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator, Button, Portal, Dialog } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import useLotteryStore from "@/store/ProviderData";

export interface IDialogMessageProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  isVisible: boolean;
  Message: string;
  El: boolean;
}

export default function DialogMessage({
  setVisible,
  isVisible,
  isLoading,
  Message,
  El,
}: IDialogMessageProps) {
  const handleCancel = () => {
    setVisible(false);
  };

  const { borlette, lotto3, lotto4, lotto5, mariage } = useLotteryStore(
    (state) => ({
      borlette: state.clearBorlette,
      lotto3: state.clearLotto3,
      lotto4: state.clearLotto4,
      lotto5: state.clearLotto5,
      mariage: state.clearMariage,
    })
  );

  return (
    <Portal>
      <Dialog
        visible={isVisible}
        onDismiss={handleCancel}
        style={styles.dialog}
      >
        <Dialog.Icon
          icon={() =>
            isLoading ? (
              <Animatable.View
                animation="rotate"
                iterationCount="infinite"
                duration={1200}
                easing="linear"
              >
                <MaterialIcons name="hourglass-top" size={36} color="#651fff" />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <MaterialIcons name="warning" size={36} color="#f44336" />
              </Animatable.View>
            )
          }
        />

        <Dialog.Title style={styles.title}>
          {isLoading ? "Processing Fiche..." : "Attention"}
        </Dialog.Title>

        <Dialog.Content>
          {isLoading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#651fff" />
            </View>
          )}
          <Text style={styles.message}>{Message}</Text>
        </Dialog.Content>

        {!isLoading && (
          <Dialog.Actions>
            <Button
              mode="contained"
              onPress={() => {
                if (El) {
                  borlette();
                  lotto3();
                  lotto4();
                  lotto5();
                  mariage();
                }
                handleCancel();
              }}
              style={styles.button}
              labelStyle={styles.buttonLabel}
              buttonColor="#651fff"
            >
              Ok
            </Button>
          </Dialog.Actions>
        )}
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
  loaderContainer: {
    alignItems: "center",
    marginVertical: 12,
  },
  message: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginTop: 8,
  },
  button: {
    borderRadius: 8,
    marginHorizontal: 12,
    marginBottom: 8,
    paddingVertical: 4,
    paddingHorizontal: 5
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "600",
  },
});
