import * as React from "react";
import { FlashList } from "@shopify/flash-list";
import { View, StyleSheet } from "react-native";
import MemoizedTextInput from "./textInput";
import { IData, IrenderItem } from "@/types/lottery";
import { Text } from "react-native-paper";

const InputsComponent = ({
  data,
  handleInputChange,
  defaultValue,
  baseDetection,
  reload,
}: IData) => {
  const renderItem = ({ item, index }: IrenderItem) => (
    <View style={[styles.cardContainer, { marginTop: 15 }]}>
      <View style={{ flexGrow: 1 }}>
        <MemoizedTextInput
          placeholder="Numero"
          value={item.number}
          defaultValue={`${
            defaultValue[index]?.number?.length > 0
              ? defaultValue[index]["number"]
              : ""
          }`}
          length={
            baseDetection == "Borlette" ? 2 : baseDetection == "Lotto3" ? 3 : 4
          }
          onChangeText={(text) => handleInputChange(index, "number", text)}
          // baseDetection={baseDetection == "Mariage" ? "default" : "numeric"}
          baseDetection="numeric"
          affixType="no"
        />
      </View>
      <View style={{ flexGrow: 1 }}>
        <MemoizedTextInput
          placeholder="Montant"
          value={item.amount}
          defaultValue={
            defaultValue[index]?.amount?.length > 0
              ? defaultValue[index]["amount"]
              : ""
          }
          length={10}
          onChangeText={(text) => handleInputChange(index, "amount", text)}
          baseDetection="numeric"
          affixType="yes"
        />
      </View>
    </View>
  );

  const keyExtractor = React.useCallback(
    (_: any, index: number) => `column-${index}`,
    []
  );

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <FlashList
        ListEmptyComponent={<Text variant="displayLarge">Loading...</Text>}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={70}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
  },
});

export default InputsComponent;
