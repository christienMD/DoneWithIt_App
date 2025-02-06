import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";

interface Props {
  label: string;
  onPress: () => void;
}

const PickerItem = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
