import React, { memo, useCallback, useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import useLotteryStore from "@/store/ProviderData";
import { IBorlette } from "@/types/lottery";
import { LotteryInputDropdown } from "@/types/complexLottery";
interface ExtendedLotteryInput extends LotteryInputDropdown {
  hasError?: boolean;
}
import ComplexInputComponent from "../complexLotto/complexInputComponent";
import ConstraintDialog from "../constraintDialog";
import { debounce } from "lodash";

function Lotto4() {
  const [inputs, setInputs] = useState<ExtendedLotteryInput[]>(
    Array(18).fill({ number: "", option: "", amount: "", hasError: false })
  );

  const [visible, setVisible] = React.useState<boolean>(false);
  const { height } = useWindowDimensions();

  const { Lotto4, addLotto4 } = useLotteryStore((state) => ({
    Lotto4: state.Lotto4,
    addLotto4: state.addLotto4,
  }));

  const updateStore = useCallback(
    debounce((newInputs: LotteryInputDropdown[]) => {
      const allNumbers = newInputs
        .map((i) => i.number)
        .filter((i) => i.length > 0);
      const montant = newInputs.map((m) => m.amount).filter((m) => m.length > 0);
      const option = newInputs.map((o) => o.option).filter((o) => o.length > 0);

      const allLotto4 = allNumbers.map((num, index) => ({
        numero: `${num}`,
        montant: montant[index] || "",
        option: option[index] || "-",
        borlette: "lotto4",
      })) as IBorlette[];
      addLotto4(allLotto4);
    }, 300),
    [addLotto4]
  );

  const handleInputChange = useCallback(
    (index: number, key: keyof LotteryInputDropdown, value: string) => {
      const newValues = [...inputs];
      const hasError = key === 'number' && value.length > 1 && value.length < 4;
      newValues[index] = { ...newValues[index], [key]: value, hasError };
      setInputs(newValues);
      updateStore(newValues);
    },
    [inputs, updateStore]
  );

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
  }, [Lotto4]);

  return (
    <View>
      <View>
        <Card style={{ backgroundColor: "white", height: (height + 530) / 2 }}>
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
