import * as React from "react";
import Dialog from "react-native-dialog";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
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
    (state) => {
      return {
        borlette: state.clearBorlette,
        lotto3: state.clearLotto3,
        lotto4: state.clearLotto4,
        lotto5: state.clearLotto5,
        mariage: state.clearMariage,
      };
    }
  );

  return (
    <Dialog.Container visible={isVisible}>
      {!isLoading && <Dialog.Title>Avètisman sou fiche la</Dialog.Title>}
      {isLoading && (
        <Dialog.Description>
          <View style={styles.ViewContainer}>
            <ActivityIndicator
              animating={true}
              size={"small"}
              color="#651fff"
            />
          </View>
        </Dialog.Description>
      )}
      <Dialog.Description>{Message}</Dialog.Description>
      {!isLoading && (
        <Dialog.Button
          label="Ok"
          color="#651fff"
          onPress={() => {
            if (El) {
              borlette();
              lotto3();
              lotto4();
              lotto5();
              mariage();
              handleCancel();
            } else {
              handleCancel();
            }
          }}
        />
      )}
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  ViewContainer: { flex: 1, width: "100%", paddingTop: 14, paddingLeft: 110 },
});
