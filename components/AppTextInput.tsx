import { Platform, StyleSheet, Text, TextInput, View, TextInputProps } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from '@/app/config/styles'
import colors from "@/app/config/colors";

interface Props extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

const AppTextInput = ({ icon, ...otherProps}: Props) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={styles.icon} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 15
  },
  textInput: defaultStyles.text,
});