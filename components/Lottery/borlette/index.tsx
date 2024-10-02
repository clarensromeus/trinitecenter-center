import React, { memo, useState, useCallback } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";
import InputsComponent from "../inputComponent";
import { IBorlette, LotteryInput } from "@/types/lottery";
import useLotteryStore from "@/store/ProviderData";
import ConstraintDialog from "../constraintDialog";

function Borlette() {
  const [inputs, setInputs] = useState<LotteryInput[]>(
    Array(12).fill({ number: "", amount: "" })
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

  const { Borlette, addBorlette } = useLotteryStore((state) => ({
    Borlette: state.Borlette,
    addBorlette: state.addBorlette,
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
        const allBorlette = allNumbers.map((num, index) => {
          return {
            numero: `${num}`,
            montant: montant[index],
            option: "-",
            borlette: "borlette",
          };
        }) as IBorlette[];
        addBorlette(allBorlette);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

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
  }, []);

  return (
    <View>
      <View>
        <Card style={{ backgroundColor: "white", height: (height + 368) / 2 }}>
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
