import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "@/components/Screen";
import AppTextInput from "@/components/AppTextInput";
import AppButton from "@/components/AppButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/images/logo-red.png")}
      />

        <AppTextInput
          autoCapitalize="none"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
        />

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
      <AppButton
        title="Login"
        onPress={() => console.log("email: ", email, "password: ", password)}
      />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
});
