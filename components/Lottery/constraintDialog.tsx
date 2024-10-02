import * as React from "react";
import Dialog from "react-native-dialog";
import { StyleSheet } from "react-native";

export interface IDialogConstraintProps {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConstraintDialog({
  isVisible,
  setVisible,
}: IDialogConstraintProps) {
  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Description style={styles.descriptionColor}>
        dezole Agent, ou bliye ranpli yon chan, ou dwe antre infomasyon yo byen
      </Dialog.Description>
      <Dialog.Button
        label="Ok"
        color="#651fff"
        onPress={() => setVisible(false)}
      />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  ViewContainer: { flex: 1, width: "100%", paddingTop: 10, paddingLeft: 60 },
  descriptionColor: { color: "#757575" },
});
