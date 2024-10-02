import * as React from "react";
import { StyleSheet } from "react-native";
import Dialog from "react-native-dialog";
import { PayFiche } from "../Lottery/logics";
import { ActivityIndicator } from "react-native-paper";

export interface IPeyeTikeProps {
  visiblePeye: boolean;
  setVisiblePeye: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PeyeTike({
  visiblePeye,
  setVisiblePeye,
}: IPeyeTikeProps) {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>(
    "Nimero tiké ou vle peye a"
  );
  const [kod, setKod] = React.useState<string>("");

  const handleCancel = () => {
    setVisiblePeye(false);
  };

  const Peye = async (code: string) => {
    try {
      setLoading(true);
      const peye = await PayFiche(code);
      if (peye.state == false) {
        setMessage(peye.message);
        setLoading(false);
      }
      if (peye.state == true) {
        setMessage(peye.message);
        setLoading(false);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return (
    <Dialog.Container visible={visiblePeye} contentStyle={{ maxWidth: "84%" }}>
      <Dialog.Title>Peye Fiche la</Dialog.Title>
      <Dialog.Description style={{ width: "100%" }}>
        {isLoading
          ? "prosesis pou peye tike a ap mache, fe yon ti tann"
          : message}
      </Dialog.Description>
      {isLoading ? (
        <ActivityIndicator animating={true} size={40} color="#651fff" />
      ) : (
        <Dialog.Input
          wrapperStyle={{ width: "100%", paddingTop: 20 }}
          placeholder="Entre kod la"
          onChangeText={(text) => setKod(text)}
        />
      )}

      <Dialog.Button
        label="CANCEL"
        style={{ textTransform: "uppercase" }}
        color="red"
        onPress={handleCancel}
      />
      <Dialog.Button
        label="Ok"
        style={{ textTransform: "uppercase" }}
        color={"#651fff"}
        onPress={() => {
          Peye(kod);
        }}
      />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
