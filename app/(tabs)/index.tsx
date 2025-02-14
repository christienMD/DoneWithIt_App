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
import MessagesScreen from "../screens/MessagesScreen";
import Screen from "@/components/Screen";
import Icon from "@/components/Icon";
import ListItem from "@/components/ListItem";
import AcountScreen from "../screens/AcountScreen";
import ListingsScreen from "../screens/ListingsScreen";
import LoginScreen from "../screens/LoginScreen";

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
      }}
    >
      <LoginScreen />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
