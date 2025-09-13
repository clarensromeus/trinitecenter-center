import * as React from "react";
import { FlashList } from "@shopify/flash-list";
import { View, StyleSheet } from "react-native";
import { IrenderItem } from "@/types/lottery";
import MemoizedTextInput from "../textInput";
import MemoizedDropDown from "./dropDownInput";
import { IDataDropdown } from "@/types/complexLottery";

const ComplexInputComponent = ({
  data,
  handleInputChange,
  defaultValue,
  baseDetection,
}: IDataDropdown) => {
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
          length={baseDetection == "Lotto4" ? 4 : 5}
          baseDetection={"numeric"}
          onChangeText={(text) => handleInputChange(index, "number", text)}
          affixType="no"
          hasError={item.hasError}
        />
      </View>
      <View style={styles.dropDown}>
        <MemoizedDropDown
          defaultValue={
            defaultValue[index]?.option.length > 0
              ? defaultValue[index]["option"]
              : ""
          }
          handleOption={(selectedItem, __) =>
            handleInputChange(index, "option", selectedItem.title)
          }
        />
      </View>
      <View style={{ flexGrow: 1 }}>
        <MemoizedTextInput
          placeholder="Montant"
          value={item.amount}
          defaultValue={`${
            defaultValue[index]?.amount?.length > 0
              ? defaultValue[index]["amount"]
              : ""
          }`}
          length={10}
          baseDetection={"numeric"}
          onChangeText={(text) => handleInputChange(index, "amount", text)}
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
  dropDown: {
    paddingTop: 8,
  },
});

export default ComplexInputComponent;
