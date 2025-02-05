import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import AppText from "@/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "@/components/AppButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Card from "@/components/cards/Card";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const App = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#f8f4f4",
        padding: 20,
      }}
    >
      {/* <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("@/assets/images/jacket.jpg")}
      /> */}
      <ListingDetailsScreen  />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
