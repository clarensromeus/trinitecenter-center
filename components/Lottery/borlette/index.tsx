import React, { memo, useState, useCallback, useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Card } from "react-native-paper";
import InputsComponent from "../inputComponent";
import { IBorlette, LotteryInput } from "@/types/lottery";
interface ExtendedLotteryInput extends LotteryInput {
  hasError?: boolean;
}
import useLotteryStore from "@/store/ProviderData";
import ConstraintDialog from "../constraintDialog";
import { debounce } from "lodash";

function Borlette() {
  const [inputs, setInputs] = useState<ExtendedLotteryInput[]>(
    Array(18).fill({ number: "", amount: "", hasError: false })
  );
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const { height } = useWindowDimensions();

  const { Borlette, addBorlette } = useLotteryStore((state) => ({
    Borlette: state.Borlette,
    addBorlette: state.addBorlette,
  }));

  const updateStore = useCallback(
    debounce((newInputs: LotteryInput[]) => {
      const allNumbers = newInputs
        .map((i) => i.number)
        .filter((i) => i.length > 0);
      const montant = newInputs.map((m) => m.amount).filter((m) => m.length > 0);

      const allBorlette = allNumbers.map((num, index) => ({
        numero: `${num}`,
        montant: montant[index] || "",
        option: "-",
        borlette: "borlette",
      })) as IBorlette[];
      addBorlette(allBorlette);
    }, 300),
    [addBorlette]
  );

  const handleInputChange = useCallback(
    (index: number, key: keyof LotteryInput, value: string) => {
      const newValues = [...inputs];
      const hasError = key === 'number' && value.length === 1;
      newValues[index] = { ...newValues[index], [key]: value, hasError };
      setInputs(newValues);
      updateStore(newValues);
    },
    [inputs, updateStore]
  );

  



  React.useEffect(() => {
    const number = Borlette.map((b) => b.numero);
    const amount = Borlette.map((b) => b.montant);
    const firstValue = inputs.map((bo, ind) => {
      if (Borlette.length > 0 && ind < Borlette.length) {
        return {
          number: number[ind],
          amount: amount[ind],
        };
      } else {
        return { number: "", amount: "" };
      }
    });
    setInputs(firstValue);
  }, [Borlette]);

  return (
    <View>
      <View>
        <Card style={{ backgroundColor: "white", height: (height + 530) / 2 }}>
          <Card.Content>
            <View>
              <InputsComponent
                defaultValue={inputs}
                data={inputs}
                handleInputChange={handleInputChange}
                baseDetection="Borlette"
              />
            </View>
          </Card.Content>
        </Card>
      </View>

      <ConstraintDialog setVisible={setVisible} isVisible={visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scrollViewContainer: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 7,
  },
  formData: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 24,
  },
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
  },
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
  Button: { borderRadius: 5, flexGrow: 1 },
});

export default memo(Borlette);
