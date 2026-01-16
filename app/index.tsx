// Importações necessárias
import { router } from "expo-router"; // Sistema de navegação do Expo
import React, { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

/**
 * SplashScreen - Tela inicial do aplicativo
 * Exibe uma animação de boas-vindas e redireciona automaticamente para o login
 */
export default function SplashScreen() {
  // useEffect executa o código quando o componente é montado
  useEffect(() => {
    // Após 1.5 segundos, redireciona para a tela de login
    const t = setTimeout(() => {
      router.replace("/(auth)/login"); // replace substitui a rota atual (não permite voltar)
    }, 1500);

    // Função de limpeza: remove o timeout quando o componente é desmontado
    return () => clearTimeout(t);
  }, []); // Array vazio = executa apenas uma vez

  return (
    // SafeAreaView garante que o conteúdo não fique sob a barra de status
    <View style={styles.safe}>
      {/* ImageBackground permite colocar uma imagem como fundo */}
      <ImageBackground
        source={require("../assets/splash/mapa.png")} // Imagem de fundo (mapa)
        style={styles.bg}
        resizeMode="cover" // Cobre toda a tela mantendo proporções
      >
        {/* Container centralizado para o conteúdo */}
        <View style={styles.center}>
          {/* Ícone do motorista */}
          <Image
            source={require("../assets/splash/motorista.png")}
            style={styles.icon}
            resizeMode="contain" // Mantém a imagem completa dentro do espaço
          />
          {/* Título do aplicativo */}
          <Text style={styles.title}>App Motorista</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// Estilos do componente usando StyleSheet para melhor performance
const styles = StyleSheet.create({
  safe: {
    flex: 1, // Ocupa toda a altura disponível
    backgroundColor: "#fff",
  },

  bg: {
    flex: 1, // Ocupa todo o espaço do SafeAreaView
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
  },

  center: {
    alignItems: "center", // Centraliza filhos horizontalmente
    justifyContent: "center", // Centraliza filhos verticalmente
  },

  icon: {
    width: 120, // Largura do ícone
    height: 120, // Altura do ícone
    marginBottom: 16, // Espaçamento abaixo do ícone
  },

  title: {
    fontSize: 28, // Tamanho da fonte
    fontWeight: "700", // Fonte em negrito (bold)
    color: "#0A84FF", // Cor azul
  },
});
