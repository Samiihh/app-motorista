import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 1500);

    return () => clearTimeout(t);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require("../assets/splash/mapa.png")}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.center}>
          <Image
            source={require("../assets/splash/motorista.png")}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.title}>App Motorista</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0A84FF",
  },
});
