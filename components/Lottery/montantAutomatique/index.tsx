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
  const addMontantAutomatic = useLotteryStore((state) => state.addMontantAutomatic);
  const montantAutomatic = useLotteryStore((state) => state.MontantAutomatic);

  const handleAddMontant = React.useCallback(() => {
    if (!text || isNaN(Number(text))) return;
    
    const newMontants = Array(72).fill(text);
    addMontantAutomatic(newMontants);
    setVisible(false);
    setText("");
  }, [text, montantAutomatic.length, addMontantAutomatic, setVisible]);

  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Input
        label="Montant"
        keyboardType="numeric"
        placeholder="Montant"
        value={text}
        onChangeText={setText}
      />
      <Dialog.Button
        label="Ajoute"
        color="white"
        style={{ backgroundColor: "#651fff" }}
        onPress={handleAddMontant}
      />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  ViewContainer: { flex: 1, width: "100%", paddingTop: 10, paddingLeft: 60 },
  descriptionColor: { color: "#757575" },
});
