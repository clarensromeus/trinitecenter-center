// import React, { memo, useCallback, useState, useEffect } from "react";
// import { View, useWindowDimensions } from "react-native";
// import { Card, Button, Portal, Dialog, TextInput } from "react-native-paper";
// import InputsComponent from "../inputComponent";
// import useLotteryStore from "@/store/ProviderData";
// import { IBorlette, LotteryInput } from "@/types/lottery";
// import ConstraintDialog from "../constraintDialog";
// import { debounce } from "lodash";
// import { LotteryInputDropdown } from "@/types/complexLottery";

// interface ExtendedLotteryInput extends LotteryInputDropdown {
//   hasError?: boolean;
// }

// function Mariage() {
//   const [inputs, setInputs] = useState<ExtendedLotteryInput[]>(
//     Array(72).fill({ number: "", amount: "", hasError: false })
//   );
//   const [visible, setVisible] = React.useState<boolean>(false);
//   const [amountDialogVisible, setAmountDialogVisible] = useState(false);
//   const [bulkAmount, setBulkAmount] = useState("");
//   const { height } = useWindowDimensions();

//   const { Mariage, addMariage, Borlette } = useLotteryStore((state) => ({
//     Mariage: state.Mariage,
//     addMariage: state.addMariage,
//     Borlette: state.Borlette,
//   }));

//   const updateStore = useCallback(
//     debounce((newInputs: LotteryInput[]) => {
//       const allNumbers = newInputs
//         .map((i) => i.number)
//         .filter((i) => i.length > 0);
//       const montant = newInputs.map((m) => m.amount).filter((m) => m.length > 0);

//       if (allNumbers.length === montant.length) {
//         const allMariage = allNumbers.map((num, index) => ({
//           numero: `${num}`,
//           montant: montant[index],
//           option: "-",
//           borlette: "mariage",
//         })) as IBorlette[];
//         addMariage(allMariage);
//       }
//     }, 300),
//     [addMariage]
//   );

//   const handleInputChange = useCallback(
//     (index: number, key: keyof LotteryInput, value: string) => {
//       const newValues = [...inputs];
//       const hasError = key === 'number' && ((value.length > 0 && value.length < 4) || (newValues[index].hasError && value.length > 0 && value.length < 4));
//       newValues[index] = { ...newValues[index], [key]: value, hasError };
//       setInputs(newValues);
//       updateStore(newValues);
//     },
//     [inputs, updateStore]
//   );

//   useEffect(() => {
//     if (Mariage.length > 0) {
//       // If there's existing Mariage data, use it
//       const number = Mariage.map((b) => b.numero);
//       const amount = Mariage.map((b) => b.montant);
//       const firstValue = inputs.map((bo, ind) => {
//         if (ind < Mariage.length) {
//           return {
//             number: number[ind],
//             amount: amount[ind],
//             option: "-"
//           };
//         } else {
//           return { number: "", amount: "", option: "-" };
//         }
//       });
//       setInputs(firstValue);
//     } else if (Borlette.length > 0) {
//       // If no Mariage data but Borlette data exists, generate combinations
//       const borletteNumbers = Borlette.map((b) => b.numero);
//       const result: string[] = [];
      
//       for (let i = 0; i < borletteNumbers.length; i++) {
//         for (let j = 0; j < borletteNumbers.length; j++) {
//           if (i !== j) {
//             result.push(`${borletteNumbers[i]}${borletteNumbers[j]}`);
//           }
//         }
//       }

//       const newInputs = inputs.map((input, index) => {
//         if (index < result.length) {
//           return { ...input, number: result[index] };
//         }
//         return input;
//       });

//       setInputs(newInputs);
//       updateStore(newInputs);
//     }
//   }, [Borlette, Mariage]);

//   return (
//     <View>
//       <View>
//         <Card style={{ backgroundColor: "white", height: (height + 400) / 2 }}>
//           <Card.Content>
//             <InputsComponent
//               defaultValue={inputs}
//               data={inputs}
//               handleInputChange={handleInputChange}
//               baseDetection="Mariage"
//             />
//           </Card.Content>
//         </Card>
//       </View>
//       <ConstraintDialog setVisible={setVisible} isVisible={visible} />
//       <Button
//         mode="contained"
//         onPress={() => setAmountDialogVisible(true)}
//         style={{ marginVertical: 14, paddingVertical: 2, borderRadius: 0 }}
//       >
//         Ajouter Un Numero
//       </Button>

//       <Portal>
//         <Dialog visible={amountDialogVisible} onDismiss={() => setAmountDialogVisible(false)}>
//           <Dialog.Title>Enter Amount</Dialog.Title>
//           <Dialog.Content>
//             <TextInput
//               label="Amount"
//               value={bulkAmount}
//               onChangeText={setBulkAmount}
//               keyboardType="numeric"
//               mode="outlined"
//             />
//           </Dialog.Content>
//           <Dialog.Actions>
//             <Button onPress={() => setAmountDialogVisible(false)}>Retourner</Button>
//             <Button onPress={() => {
//               const filledNumbersCount = inputs.filter(input => input.number.length > 0).length;
//               const newInputs = [...inputs].map((input, index) => {
//                 if (index < filledNumbersCount && input.number.length > 0) {
//                   return { ...input, amount: bulkAmount };
//                 }
//                 return { ...input };
//               });
//               setInputs(newInputs);
//               updateStore(newInputs);
//               setAmountDialogVisible(false);
//               setBulkAmount("");
//             }}>Ajouter</Button>
//           </Dialog.Actions>
//         </Dialog>
//       </Portal>
//     </View>
//   );
// }

// export default memo(Mariage);
