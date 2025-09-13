import React, { memo, useCallback, useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import InputsComponent from "../inputComponent";
import useLotteryStore from "@/store/ProviderData";
import { IBorlette, LotteryInput } from "@/types/lottery";
import ConstraintDialog from "../constraintDialog";
import { debounce } from "lodash";

interface ExtendedLotteryInput extends LotteryInput {
  hasError?: boolean;
}
function Lotto3() {
  const [inputs, setInputs] = useState<ExtendedLotteryInput[]>(
    Array(18).fill({ number: "", amount: "", hasError: false })
  );
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const { height } = useWindowDimensions();

  const { Lotto3, addLotto3 } = useLotteryStore((state) => ({
    Lotto3: state.Lotto3,
    addLotto3: state.addLotto3,
  }));

  const updateStore = useCallback(
    debounce((newInputs: LotteryInput[]) => {
      const allNumbers = newInputs
        .map((i) => i.number)
        .filter((i) => i.length > 0);
      const montant = newInputs.map((m) => m.amount).filter((m) => m.length > 0);

      const allLotto3 = allNumbers.map((num, index) => ({
        numero: `${num}`,
        montant: montant[index] || "",
        option: "-",
        borlette: "lotto3",
      })) as IBorlette[];
      addLotto3(allLotto3);
    }, 300),
    [addLotto3]
  );

  const handleInputChange = useCallback(
    (index: number, key: keyof LotteryInput, value: string) => {
      const newValues = [...inputs];
      const hasError = key === 'number' && value.length > 0 && value.length < 3;
      newValues[index] = { ...newValues[index], [key]: value, hasError };
      setInputs(newValues);
      updateStore(newValues);
    },
    [inputs, updateStore]
  );



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
  }, [Lotto3]);

  return (
    <View>
      <View>
        <Card style={{ backgroundColor: "white", height: (height + 530) / 2 }}>
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
