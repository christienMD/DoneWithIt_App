import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import AppText from "@/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "@/components/AppButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Card from "@/components/cards/Card";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import AppTextInput from "@/components/AppTextInput";
import AppPicker, { Item } from "@/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const App = () => {
  const [category, setCategory] = useState<Item>(categories[0]);

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      {/* <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("@/assets/images/jacket.jpg")}
      /> */}
      {/* <ViewImageScreen  /> */}
      <AppPicker
        items={categories}
        placeholder="Category"
        icon="apps"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
