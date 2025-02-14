import { SafeAreaView, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import Constants from "expo-constants";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Screen = ({ children, style }: Props) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
