import React, { memo, useCallback, useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { ActivityIndicator, Button, Card } from "react-native-paper";
import InputsComponent from "../inputComponent";
import useLotteryStore from "@/store/ProviderData";
import { IBorlette, LotteryInput } from "@/types/lottery";
import ConstraintDialog from "../constraintDialog";

function Lotto3() {
  const [inputs, setInputs] = useState<LotteryInput[]>(
    Array(18).fill({ number: "", amount: "" })
  );
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const { height } = useWindowDimensions();

  const handleInputChange = useCallback(
    (index: number, key: keyof LotteryInput, value: string) => {
      const newValues = [...inputs];
      newValues[index] = { ...newValues[index], [key]: value };
      setInputs(newValues);
    },
    [inputs]
  );

  const { Lotto3, addLotto3 } = useLotteryStore((state) => ({
    Lotto3: state.Lotto3,
    addLotto3: state.addLotto3,
  }));

  const save = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLoading(false);
      const allNumbers = inputs
        .map((i) => i.number)
        .filter((i) => i.length > 0);
      const montant = inputs.map((m) => m.amount).filter((m) => m.length > 0);
      if (allNumbers.length != montant.length) {
        setVisible(true);
      } else {
        const allLotto3 = allNumbers.map((num, index) => {
          return {
            numero: `${num}`,
            montant: montant[index],
            option: "-",
            borlette: "lotto3",
          };
        }) as IBorlette[];
        addLotto3(allLotto3);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  React.useEffect(() => {
    const number = Lotto3.map((b) => b.numero);
    const amount = Lotto3.map((b) => b.montant);
    const firstValue = inputs.map((bo, ind) => {
      if (Lotto3.length > 0 && ind < Lotto3.length) {
        return {
          number: number[ind],
          amount: amount[ind],
        };
      } else {
        return { number: "", amount: "" };
      }
    });
    setInputs(firstValue);
  }, []);

  return (
    <View>
      <View>
        <Card style={{ backgroundColor: "white", height: (height + 368) / 2 }}>
          <Card.Content>
            <InputsComponent
              defaultValue={inputs}
              data={inputs}
              handleInputChange={handleInputChange}
              baseDetection="Lotto3"
            />
          </Card.Content>
        </Card>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon={"content-save-cog"}
          mode="contained"
          buttonColor="#651fff"
          style={styles.Button}
          onPress={save}
        >
          {isLoading ? (
            <ActivityIndicator animating={true} color="white" />
          ) : (
            "Enregistrer"
          )}
        </Button>
      </View>
      <ConstraintDialog setVisible={setVisible} isVisible={visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    paddingTop: 25,
    paddingBottom: 10,
    flexDirection: "row",
  },
  vider: {
    color: "#f44336",
    fontWeight: "bold",
    fontSize: 17,
  },
  listParent: { width: 400 },
  card: { backgroundColor: "white" },
  Button: { borderRadius: 5, flexGrow: 1 },
});

export default memo(Lotto3);
