import { Text, StyleSheet, Platform } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppText = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
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
