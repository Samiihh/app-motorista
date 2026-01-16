// Importações necessárias
import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Props do componente DashboardHeader
 * @param appName - Nome do aplicativo a exibir
 * @param userName - Nome do usuário logado
 */
type Props = {
  appName: string;
  userName: string;
};

/**
 * DashboardHeader - Cabeçalho personalizado do dashboard
 * Exibe o nome do app, nome do usuário e um avatar circular com a inicial do nome
 */
export default function DashboardHeader({ appName, userName }: Props) {
  // Extrai a primeira letra do nome do usuário para usar como inicial no avatar
  const initial = (userName?.trim()?.[0] || "U").toUpperCase();

  return (
    <View style={styles.container}>
      {/* Fundo azul com overlay semi-transparente */}
      <View style={styles.bg} />

      {/* Row contendo informações do usuário e avatar */}
      <View style={styles.row}>
        {/* Textos: nome do app e nome do usuário */}
        <View style={styles.left}>
          <Text style={styles.appName}>{appName}</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>

        {/* Avatar circular com a inicial do usuário */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container principal do header
  container: {
    height: 140, // Altura fixa do header
    backgroundColor: "#0B63CE", // Cor de fundo azul
    overflow: "hidden", // Corta conteúdo que ultrapassa os limites
  },

  // Fundo com overlay semi-transparente
  bg: {
    ...StyleSheet.absoluteFillObject, // Preenche todo o container
    opacity: 0.18,
    backgroundColor: "#0A5BBE", // Cor do overlay
    // TODO: depois trocar por ImageBackground se quiser adicionar imagem de fundo
  },

  // Row flex que contém as informações
  row: {
    flex: 1,
    paddingHorizontal: 16, // Espaçamento lateral
    paddingTop: 18, // Espaçamento superior
    flexDirection: "row", // Distribui em linha
    alignItems: "center", // Centraliza verticalmente
    justifyContent: "space-between", // Espaça itens
  },

  // Container dos textos (nome app e nome usuário)
  left: { gap: 6 }, // Espaçamento entre os dois textos

  // Estilo do nome do app
  appName: {
    color: "#E9F2FF", // Cor azul clara
    fontSize: 16,
    fontWeight: "500",
  },

  // Estilo do nome do usuário
  userName: {
    color: "#FFFFFF", // Branco
    fontSize: 20,
    fontWeight: "800", // Extra bold
  },

  // Avatar circular
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27, // Faz um círculo (metade da largura/altura)
    backgroundColor: "#EAF2FF", // Fundo claro
    alignItems: "center", // Centraliza conteúdo
    justifyContent: "center",
  },

  // Letra dentro do avatar
  avatarText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0B63CE", // Azul para contrastar com fundo claro
  },
});
