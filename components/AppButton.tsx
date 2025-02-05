import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "@/app/config/colors";

type ColorKeys = keyof typeof colors;
interface Props {
  title: string;
  onPress: () => void;
  color?: ColorKeys;
}

const AppButton = ({ title, onPress, color }: Props) => {
  const backgroundColor = color ? colors[color] : colors.primary;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontSize: 17,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
