import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const onEntrar = () => {
    // depois validamos e autenticamos de verdade
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60",
            }}
            style={styles.bg}
            imageStyle={styles.bgImage}
          >
            <View style={styles.overlay} />

            <View style={styles.content}>
              <Text style={styles.bigTitle}>Bem vindo{"\n"}de volta</Text>

              <Text style={styles.subtitle}>
                Faça login para{"\n"}acessar o app do motorista
              </Text>

              <View style={styles.inputRow}>
                <TextInput
                  value={usuario}
                  onChangeText={setUsuario}
                  placeholder="Usuário"
                  placeholderTextColor="#333"
                  style={styles.input}
                  autoCapitalize="none"
                />
                <Ionicons name="happy-outline" size={22} color="#333" />
              </View>
              <View style={styles.underline} />

              <View style={styles.inputRow}>
                <TextInput
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Senha"
                  placeholderTextColor="#333"
                  style={styles.input}
                  secureTextEntry
                />
                <Ionicons name="checkmark" size={22} color="#333" />
              </View>
              <View style={styles.underline} />

              <Pressable style={styles.button} onPress={onEntrar}>
                <Text style={styles.buttonText}>Entrar</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ECECEC" },
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 65,
    paddingHorizontal: 18,
  },
  topTitle: { fontSize: 18, color: "#222", marginBottom: 14 },

  card: {
    width: "100%",
    maxWidth: 360,
    height: 640,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  bg: { flex: 1 },
  bgImage: { opacity: 0.22, transform: [{ scale: 1.08 }] },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.55)",
  },

  content: { flex: 1, paddingHorizontal: 26, paddingTop: 62 },

  bigTitle: {
    fontSize: 44,
    fontWeight: "800",
    color: "#111",
    lineHeight: 50,
    textAlign: "center",
    marginBottom: 22,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 46,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  input: { flex: 1, fontSize: 18, color: "#111", paddingRight: 12 },
  underline: {
    height: 1.4,
    backgroundColor: "#4B3F72",
    opacity: 0.65,
    marginBottom: 22,
  },

  button: {
    marginTop: 26,
    backgroundColor: "#0A84FF",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
