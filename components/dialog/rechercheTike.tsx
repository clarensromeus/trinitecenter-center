import * as React from "react";
import Dialog from "react-native-dialog";
import { rechercheFiche } from "../Lottery/logics";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native-paper";

export interface IAnileToutTikeProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RechercherTike({ visible, setVisible }: IAnileToutTikeProps) {
  const handleCancel = () => {
    setVisible(false);
  };
  const [kod, setKod] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>(
    "Silvouple entre kòd tike ou vle chèche a"
  );
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const rechecheTike = async () => {
    try {
      if (kod.length < 5) {
        setMessage("Entre yon kod ki egal ou  pi wo ke 5");
      }
      setLoading(true);
      const recheche = await rechercheFiche(kod);
      setLoading(false);
      if (recheche.state) {
        router.push({ pathname: "/[code]", params: { code: kod } });
        setLoading(false);
      } else {
        setMessage("Kod la pa korek, entre yon lot");
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Trouve yon tike</Dialog.Title>
      <Dialog.Description>{message}</Dialog.Description>
      {loading ? (
        <ActivityIndicator animating={true} color="#651fff" />
      ) : (
        <Dialog.Input
          placeholder="Entre Kòd la"
          onChangeText={(text) => setKod(text)}
        />
      )}
      <Dialog.Button
        style={{ textTransform: "uppercase" }}
        label="Anilé"
        color={"red"}
        onPress={handleCancel}
      />
      <Dialog.Button
        label="Ok"
        style={{ textTransform: "uppercase" }}
        color={"#651fff"}
        onPress={rechecheTike}
      />
    </Dialog.Container>
  );
}
