import * as React from "react";
import { Pressable } from "react-native";
import { Menu, useTheme, Portal, Dialog, TextInput, Button } from "react-native-paper";
import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import useLotteryStore from "@/store/ProviderData";

const MenuForPlay = ({ visibleMenu, openMenu, closeMenu, router, styles }: any) => {
  const theme = useTheme();
  const [amountDialogVisible, setAmountDialogVisible] = React.useState(false);
  const [bulkAmount, setBulkAmount] = React.useState("");

  const { Mariage, Borlette, Lotto3, Lotto4, Lotto5, selectedComponent,  addMariage, addBorlette, addLotto3, addLotto4, addLotto5, generateAutomaticMariage } = useLotteryStore((state) => ({
    Mariage: state.Mariage,
    Borlette: state.Borlette,
    Lotto3: state.Lotto3,
    Lotto4: state.Lotto4,
    Lotto5: state.Lotto5,
    selectedComponent: state.selectedComponent,
    addMariage: state.addMariage,
    addBorlette: state.addBorlette,
    addLotto3: state.addLotto3,
    addLotto4: state.addLotto4,
    addLotto5: state.addLotto5,
    generateAutomaticMariage: state.generateAutomaticMariage
  }));

  const handleBulkAmountUpdate = () => {
    if (Mariage.length > 0 && selectedComponent === "Mariage") {
      const updatedMariage = Mariage.map(item => ({
        ...item,
        montant: bulkAmount
      }));
      addMariage(updatedMariage);
    }
    if (Borlette.length > 0 && selectedComponent === "Borlette") {
      const updatedBorlette = Borlette.map(item => ({
        ...item,
        montant: bulkAmount
      }));
      addBorlette(updatedBorlette);
    }
    if (Lotto3.length > 0 && selectedComponent === "Lotto3") {
      const updatedLotto3 = Lotto3.map(item => ({
        ...item,
        montant: bulkAmount
      }));
      addLotto3(updatedLotto3);
    }
    if (Lotto4.length > 0 && selectedComponent === "Lotto4") {
      const updatedLotto4 = Lotto4.map(item => ({
        ...item,
        montant: bulkAmount
      }));
      addLotto4(updatedLotto4);
    }
    if (Lotto5.length > 0 && selectedComponent === "Lotto5") {
      const updatedLotto5 = Lotto5.map(item => ({
        ...item,
        montant: bulkAmount
      }));
      addLotto5(updatedLotto5);
    }
    
    setAmountDialogVisible(false);
    setBulkAmount("");
    closeMenu();
  };

  return (
    <Menu
      visible={visibleMenu}
      onDismiss={closeMenu}
      
      anchor={
        <Pressable
          onPress={openMenu}
          hitSlop={20}
          style={({ pressed }) => [
            styles.iconButton,
            {
              backgroundColor: pressed
                ? theme.colors.backdrop
                : "transparent",
              borderRadius: 20,
              padding: 6,
            
            },
          ]}
        >
          <Entypo name="dots-three-vertical" size={27} color={"white"} />
        </Pressable>
      }
    >
      <Menu.Item
        onPress={() => {
          router.navigate("/(home)/(jwe)");
          closeMenu();
        }}
        title="Retounen avan"
        leadingIcon={() => (
          <Ionicons name="arrow-back" size={20} color={theme.colors.onSurface} />
        )}
        contentStyle={{ paddingHorizontal: 10 }}
      />
      <Menu.Item
        onPress={() => {
          generateAutomaticMariage();
          closeMenu();
        }}
        title="Mariage automatique"
        leadingIcon={() => (
          <MaterialCommunityIcons name="account-heart" size={20} color={theme.colors.onSurface} />
        )}
        contentStyle={{ paddingHorizontal: 10 }}
      />
      <Menu.Item
        onPress={() => setAmountDialogVisible(true)}
        title="Montant automatique"
        leadingIcon={() => (
          <MaterialCommunityIcons name="cash-100" size={20} color={theme.colors.onSurface} />
        )}
        contentStyle={{ paddingHorizontal: 10 }}
      />
      <Portal>
        <Dialog visible={amountDialogVisible} onDismiss={() => setAmountDialogVisible(false)}>
          <Dialog.Title>Enter Amount</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Amount"
              value={bulkAmount}
              onChangeText={setBulkAmount}
              keyboardType="numeric"
              mode="outlined"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setAmountDialogVisible(false)}>Retourner</Button>
            <Button onPress={handleBulkAmountUpdate}>Ajouter</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Menu>
  );
};

export default MenuForPlay;
