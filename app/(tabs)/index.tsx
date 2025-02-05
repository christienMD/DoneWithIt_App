import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import AppText from "@/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "@/components/AppButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I Love React Native!</AppText>
      <AppButton onPress={() => console.log('Login Pressed')} title="Login" />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
