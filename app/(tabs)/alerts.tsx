// Importações necessárias
import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * AlertsScreen - Tela de alertas
 * Exibe notificações e alertas para o usuário
 * TODO: implementar lista de alertas com filtros e ações
 */
export default function AlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Alertas</Text>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  // Container principal - centraliza o conteúdo
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  // Texto padrão da tela
  text: { 
    fontSize: 18, 
    fontWeight: "700" 
  },
});