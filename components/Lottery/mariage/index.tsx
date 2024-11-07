import React, { memo, useCallback, useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";
import InputsComponent from "../inputComponent";
import useLotteryStore from "@/store/ProviderData";
import { IBorlette, LotteryInput } from "@/types/lottery";
import ConstraintDialog from "../constraintDialog";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Mariage() {
  const [inputs, setInputs] = useState<LotteryInput[]>(
    Array(72).fill({ number: "", amount: "" })
  );
  const [loading, setLoading] = React.useState<boolean>(false);
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

  const { Mariage, addMariage, Reload, addReload } = useLotteryStore(
    (state) => ({
      Mariage: state.Mariage,
      addMariage: state.addMariage,
      Reload: state.Reload,
      addReload: state.addReload,
    })
  );

  const addTo = async () => {
    try {
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const save = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLoading(false);
      const allNumbers = inputs
        .map((n) => n.number)
        .filter((n) => n.length > 0);
      const montant = inputs.map((m) => m.amount).filter((m) => m.length > 0);
      if (allNumbers.length != montant.length) {
        setVisible(true);
      } else {
        const allMariage = allNumbers.map((num, index) => {
          return {
            numero: `${num}`,
            montant: montant[index],
            option: "-",
            borlette: "mariage",
          };
        }) as IBorlette[];
        addMariage(allMariage);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  React.useEffect(() => {
    const number = Mariage.map((b) => b.numero);
    const amount = Mariage.map((b) => b.montant);

    const firstValue = inputs.map((bo, ind) => {
      if (Mariage.length > 0 && ind < Mariage.length) {
        return {
          number: number[ind],
          amount: amount[ind],
        };
      } else {
        return { number: "", amount: "" };
      }
    });
    setInputs(firstValue);
  }, [Reload]);

  React.useEffect(() => {
    const number = Mariage.map((b) => b.numero);
    const amount = Mariage.map((b) => b.montant);
    const firstValue = inputs.map((bo, ind) => {
      if (Mariage.length > 0 && ind < Mariage.length) {
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
              baseDetection="Mariage"
              reload={Reload}
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
        <Pressable
          style={styles.firstButton}
          onPress={() => {
            addReload();
          }}
        >
          <Ionicons name="copy-outline" size={25} color="#651fff" />
          <Text
            variant="headlineSmall"
            style={{
              // textTransform: "uppercase",
              color: "#651fff",
              fontSize: 19,
            }}
          >
            Ajouter
          </Text>
        </Pressable>
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
    gap: 5,
  },
  vider: {
    color: "#f44336",
    fontWeight: "bold",
    fontSize: 17,
  },
  listParent: { width: 400 },
  card: { backgroundColor: "white" },
  Button: { borderRadius: 0, flexGrow: 1 },
  firstButton: {
    width: "42%",
    margin: 8,
    borderColor: "#651fff",
    borderStyle: "solid",
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: "center",
  },
});

export default memo(Mariage);
