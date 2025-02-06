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
import AppTextInput from "@/components/AppTextInput";

const App = () => {
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
      <AppTextInput icon="email" placeholder="username" />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
