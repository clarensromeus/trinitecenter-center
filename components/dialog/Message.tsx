import * as React from "react";
import Dialog from "react-native-dialog";

export interface IMessageProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  Message: string;
}

export default function Message({
  setVisible,
  isVisible,
  Message,
}: IMessageProps) {
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Title>Avètisman sou fiche la</Dialog.Title>
      <Dialog.Description>{Message}</Dialog.Description>
      <Dialog.Button label="Ok" color={"red"} onPress={handleCancel} />
    </Dialog.Container>
  );
}
