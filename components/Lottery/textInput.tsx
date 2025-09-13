import React, { memo } from "react";
import { TextInput } from "react-native-paper";
import __ from "lodash";
import useLotteryStore from "@/store/ProviderData";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface IInput {
  value: string;
  onChangeText: (text: string) => void;
  defaultValue?: string;
  placeholder: string;
  baseDetection: any;
  length: number;
  affixType: string;
  hasError?: boolean;
}

// Memoized TextInput component
const MemoizedTextInput = memo(
  ({
    placeholder,
    onChangeText,
    value,
    baseDetection,
    length,
    affixType,
    hasError,
  }: IInput) => {
    const reload = useLotteryStore((state) => state.Reload);

    return (
      <TextInput
        key={reload}
        placeholder={placeholder}
        error={hasError}
        style={{ backgroundColor: hasError ? "#ffebee" : "white", color: hasError ? "red" : "black" }}
        value={value}
        maxLength={length}
        textColor={hasError ? "red" : "black"}
        keyboardType={baseDetection}
        onChangeText={onChangeText}
        right={affixType == "no"  && hasError ? <TextInput.Icon icon="shield-alert" color="red" /> : affixType == "yes" ? <TextInput.Affix text="HTG" /> : ""}
      />
    );
  }
);

export default MemoizedTextInput;
