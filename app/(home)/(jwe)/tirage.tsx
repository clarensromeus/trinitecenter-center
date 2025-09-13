import { renderSelectedComponent } from "@/components/Lottery/renderComponent";
import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function BorletteScreen() {
  const [selectedComponent, setSelectedComponent] =
    React.useState<string>("Borlette");

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
          }}
        >
          {Array.from(
            ["Borlette", "Lotto3", "Lotto4", "Lotto5", "Mariage"],
            (value, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedComponent(value);
                  }}
                >
                  <View
                    style={[
                      styles.textContainer,
                      { borderBottomWidth: selectedComponent == value ? 4 : 0 },
                    ]}
                  >
                    <Text style={styles.activeText}>{value}</Text>
                  </View>
                </TouchableOpacity>
              );
            }
          )}
        </ScrollView>
      </View>
      <View style={{ marginHorizontal: 12, marginTop: 22, marginBottom: 60 }}>
        {renderSelectedComponent(selectedComponent)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingTop: 14,
    backgroundColor: "#651fff",
  },
  textContainer: {
    paddingBottom: 10,
    paddingHorizontal: 12,
    borderBottomColor: "white",
  },
  activeText: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});
