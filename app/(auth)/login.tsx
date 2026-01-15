// Importações necessárias
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones
import { router } from "expo-router"; // Sistema de navegação
import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView, // Evita que o teclado cubra os campos
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Login - Tela de autenticação do aplicativo
 * Permite que o usuário entre com suas credenciais
 */
export default function Login() {
  // useState é um Hook do React que cria uma variável de estado
  // Retorna um ARRAY com 2 elementos: [valorAtual, funçãoParaAtualizar]
  // useState("") = valor inicial é uma string vazia
  
  // usuario = valor atual do campo (começa como "")
  // setUsuario = função para atualizar o valor de "usuario"
  const [usuario, setUsuario] = useState(""); 
  
  // senha = valor atual do campo de senha (começa como "")
  // setSenha = função para atualizar o valor de "senha"
  const [senha, setSenha] = useState("");

  // Função chamada ao pressionar o botão Entrar
  const onEntrar = () => {
    // TODO: depois validamos e autenticamos de verdade com backend
    router.replace("/(tabs)"); // Navega para as abas principais do app
  };

  return (
    // SafeAreaView evita que o conteúdo fique sob a barra de status
    <SafeAreaView style={styles.safe}>
      {/* KeyboardAvoidingView ajusta o layout quando o teclado aparece */}
      <KeyboardAvoidingView
        style={styles.screen}
        // behavior: define COMO o componente se ajusta ao teclado
        // "padding" (iOS) = adiciona padding na parte inferior
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Card principal que contém o formulário */}
        <View style={styles.card}>
          {/* Imagem de fundo (carro) */}
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60",
            }}
            style={styles.bg}
            imageStyle={styles.bgImage} // Estilo aplicado à imagem interna
          >
            {/* Overlay semi-transparente sobre a imagem */}
            <View style={styles.overlay} />

            {/* Container do conteúdo (textos e campos) */}
            <View style={styles.content}>
              {/* Título de boas-vindas */}
              <Text style={styles.bigTitle}>Bem vindo{"\n"}de volta</Text>

              {/* Subtítulo explicativo */}
              <Text style={styles.subtitle}>
                Faça login para{"\n"}acessar o app do motorista
              </Text>

              {/* Campo de entrada do usuário */}
              <View style={styles.inputRow}>
                <TextInput
                  value={usuario} // Valor controlado pelo estado
                  onChangeText={setUsuario} // Atualiza o estado quando o texto muda
                  placeholder="Usuário"
                  placeholderTextColor="#333"
                  style={styles.input}
                  autoCapitalize="none" // Desativa maiúsculas automáticas
                />
                {/* Ícone decorativo */}
                <Ionicons name="happy-outline" size={22} color="#333" />
              </View>
              {/* Linha decorativa sob o campo */}
              <View style={styles.underline} />

              {/* Campo de entrada da senha */}
              <View style={styles.inputRow}>
                <TextInput
                  value={senha} // Valor controlado pelo estado
                  onChangeText={setSenha} // Atualiza o estado quando o texto muda
                  placeholder="Senha"
                  placeholderTextColor="#333"
                  style={styles.input}
                  secureTextEntry // Oculta o texto digitado (campo de senha)
                />
                {/* Ícone decorativo */}
                <Ionicons name="checkmark" size={22} color="#333" />
              </View>
              {/* Linha decorativa sob o campo */}
              <View style={styles.underline} />

              {/* Botão de login */}
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

// Estilos do componente
const styles = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: "#ECECEC" // Cor de fundo cinza claro
  },
  screen: {
    flex: 1,
    alignItems: "center", // Centraliza o card horizontalmente
    paddingTop: 65, // Espaçamento superior
    paddingHorizontal: 18, // Espaçamento lateral
  },
  topTitle: { 
    fontSize: 18, 
    color: "#222", 
    marginBottom: 14 
  },

  card: {
    width: "100%",
    maxWidth: 360, // Largura máxima para telas grandes
    height: 640,
    backgroundColor: "#fff",
    overflow: "hidden", // Corta conteúdo que sair dos limites
    // Sombra para Android
    elevation: 3,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  bg: { flex: 1 },
  bgImage: { 
    opacity: 0.22, // Imagem semi-transparente (22% de opacidade)
    transform: [{ scale: 1.08 }] // Zoom leve de 8%
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Preenche todo o espaço do pai
    backgroundColor: "rgba(255,255,255,0.55)", // Branco semi-transparente
  },

  content: { 
    flex: 1, 
    paddingHorizontal: 26, // Espaçamento lateral interno
    paddingTop: 62 // Espaçamento superior
  },

  bigTitle: {
    fontSize: 44, // Texto grande
    fontWeight: "800", // Extra negrito
    color: "#111",
    lineHeight: 50, // Espaçamento entre linhas
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
    flexDirection: "row", // Organiza TextInput e ícone lado a lado
    alignItems: "center", // Alinha verticalmente ao centro
    justifyContent: "space-between", // Espaça conteúdo
    paddingVertical: 12,
  },
  input: { 
    flex: 1, // Ocupa todo espaço disponível
    fontSize: 18, 
    color: "#111", 
    paddingRight: 12 
  },
  underline: {
    height: 1.4, // Altura da linha
    backgroundColor: "#4B3F72", // Cor roxa
    opacity: 0.65, // Semi-transparente
    marginBottom: 22,
  },

  button: {
    marginTop: 26,
    backgroundColor: "#0A84FF", // Azul
    paddingVertical: 14,
    borderRadius: 999, // Arredondado (valor alto = totalmente arredondado)
    alignItems: "center", // Centraliza o texto
  },
  buttonText: { 
    color: "#fff", // Texto branco
    fontSize: 16, 
    fontWeight: "700" // Negrito
  },
});
