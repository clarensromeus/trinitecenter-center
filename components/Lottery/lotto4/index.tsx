import React, { memo, useCallback, useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";
import useLotteryStore from "@/store/ProviderData";
import { IBorlette } from "@/types/lottery";
import { LotteryInputDropdown } from "@/types/complexLottery";
import ComplexInputComponent from "../complexLotto/complexInputComponent";
import ConstraintDialog from "../constraintDialog";

function Lotto4() {
  const [inputs, setInputs] = useState<LotteryInputDropdown[]>(
    Array(12).fill({ number: "", option: "", amount: "" })
  );
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const { height } = useWindowDimensions();

  const handleInputChange = useCallback(
    (index: number, key: keyof LotteryInputDropdown, value: string) => {
      const newValues = [...inputs];
      newValues[index] = { ...newValues[index], [key]: value };
      setInputs(newValues);
    },
    [inputs]
  );

  const { Lotto4, addLotto4 } = useLotteryStore((state) => ({
    Lotto4: state.Lotto4,
    addLotto4: state.addLotto4,
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
      const option = inputs.map((o) => o.option).filter((o) => o.length > 0);
      if (
        allNumbers.length != montant.length ||
        allNumbers.length != option.length
      ) {
        setVisible(true);
      } else {
        const allLotto4 = allNumbers.map((num, index) => {
          return {
            numero: `${num}`,
            montant: montant[index],
            option: option[index],
            borlette: "lotto4",
          };
        }) as IBorlette[];
        addLotto4(allLotto4);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  React.useEffect(() => {
    const number = Lotto4.map((b) => b.numero);
    const option = Lotto4.map((b) => b.option);
    const amount = Lotto4.map((b) => b.montant);

    const firstValue = inputs.map((bo, ind) => {
      if (Lotto4.length > 0 && ind < Lotto4.length) {
        return {
          number: number[ind],
          option: option[ind],
          amount: amount[ind],
        };
      } else {
        return { number: "", option: "", amount: "" };
      }
    });
    setInputs(firstValue);
  }, []);

  return (
    <View>
      <View>
        <Card style={{ backgroundColor: "white", height: (height + 368) / 2 }}>
          <Card.Content>
            <ComplexInputComponent
              data={inputs}
              handleInputChange={handleInputChange}
              defaultValue={inputs}
              baseDetection={"Lotto4"}
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
          {loading ? (
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

export default memo(Lotto4);
