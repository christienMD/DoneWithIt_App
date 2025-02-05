import { Text, StyleSheet, Platform, TextStyle, StyleProp } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const AppText = ({ children , style}: Props) => {
  return <Text style={[styles.text , style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
