import * as React from "react";
import Borlette from "../borlette";
import Lotto3 from "../lotto3";
import Lotto4 from "../lotto4";
import Lotto5 from "../lotto5";
import Mariage from "../mariage";
import useLotteryStore from "@/store/ProviderData";

// Function to dynamically switch components
const renderSelectedComponent = (selectedComponent: string) => {
  // Update the selected component in the bulk update store
  const updateSelectedComponent = useLotteryStore(state => state.addSelectedComponent);
  React.useEffect(() => {
    updateSelectedComponent(`${selectedComponent}`);
    console.log("okay here we go : ", selectedComponent)
  }, [selectedComponent]);

  switch (selectedComponent) {
    case "Borlette":
      return <Borlette />;
    case "Lotto3":
      return <Lotto3 />;
    case "Lotto4":
      return <Lotto4 />;
    case "Lotto5":
      return <Lotto5 />;
    case "Mariage":
      return <Mariage />;
    default:
      return <Borlette />;
  }
};

export { renderSelectedComponent };
