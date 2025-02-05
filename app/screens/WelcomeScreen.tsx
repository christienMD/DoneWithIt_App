import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import AppButton from "@/components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("@/assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo-red.png")}
        />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => console.log("Login Clicked")} />
        <AppButton
          color="secondary"
          title="register"
          onPress={() => console.log("Register Clicked")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  },
});
