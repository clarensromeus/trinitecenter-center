import * as React from "react";
import Dialog from "react-native-dialog";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export interface IDialogMessageProps {
  isVisible: boolean;
}

export default function EmptyDialog({ isVisible }: IDialogMessageProps) {
  const router = useRouter();

  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Description style={styles.descriptionColor}>
        dezole Agent, ou pa gen fich ki anrejistre pou konya
      </Dialog.Description>
      <Dialog.Button label="Ok" color="#651fff" onPress={() => router.back()} />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  ViewContainer: { flex: 1, width: "100%", paddingTop: 10, paddingLeft: 60 },
  descriptionColor: { color: "#757575" },
});
