import * as React from "react";
import Dialog from "react-native-dialog";
import { StyleSheet } from "react-native";
import useLotteryStore from "@/store/ProviderData";

export interface IDialogMessageProps {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MontantDialog({
  isVisible,
  setVisible,
}: IDialogMessageProps) {
  const [text, setText] = React.useState("");
  const { Mariage, addMariage, addReload } = useLotteryStore((state) => ({
    Mariage: state.Mariage,
    addMariage: state.addMariage,
    addReload: state.addReload,
  }));
  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Input
        label="Montant"
        keyboardType="numeric"
        placeholder="Montant"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Dialog.Button
        label="Ajoute"
        color="white"
        style={{ backgroundColor: "#651fff" }}
        onPress={() => {
          const numero = Mariage.map((m) => m.numero);
          setVisible(false);
          const repeatedArray = Array(numero.length).fill(text);
          const allMariage = numero.map((num, index) => {
            return {
              numero: `${num}`,
              montant: repeatedArray[index],
              option: "-",
              borlette: "mariage",
            };
          });
          addMariage(allMariage);
          addReload();
        }}
      />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  ViewContainer: { flex: 1, width: "100%", paddingTop: 10, paddingLeft: 60 },
  descriptionColor: { color: "#757575" },
});
