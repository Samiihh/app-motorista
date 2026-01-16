// Importações necessárias
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import VehicleCard from "@/components/dashboard/VehicleCard";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

/**
 * VehiclesScreen - Tela de lista de veículos
 * Exibe uma lista com scroll de todos os veículos disponíveis
 */
export default function VehiclesScreen() {
  /**
   * useMemo: memoriza o array de veículos para não recalcular a cada render
   * [] como dependência = calcula apenas 1 vez na montagem do componente
   * TODO: depois substituir dados mock por API ou estado global
   */
  const vehicles = useMemo(
    () => [
      {
        id: "1",
        brand: "Chevrolet",
        model: "Trailblazer",
        plate: "ABC123",
        agent: "Marta Santos",
        location: "Perto da rua xyz",
        image: require("../../assets/images/trailblazerhcazuleclipse-2-2.png"),
      },
      {
        id: "2",
        brand: "Chevrolet",
        model: "Trailblazer",
        plate: "ABC123",
        agent: "Lucas Alves",
        location: "Perto da rua DFG",
        image: require("../../assets/images/Trailblazer-Preto-Ouro-Negro1.png"),
      },
       {
        id: "3",
        brand: "Chevrolet",
        model: "Trailblazer",
        plate: "ABC123",
        agent: "Lucas Alves",
        location: "Perto da rua DFG",
        image: require("../../assets/images/Trailblazer-Preto-Ouro-Negro1.png"),
      },
        {
        id: "4",
        brand: "Chevrolet",
        model: "Trailblazer",
        plate: "ABC123",
        agent: "Lucas Alves",
        location: "Perto da rua DFG",
        image: require("../../assets/images/Trailblazer-Preto-Ouro-Negro1.png"),
      },
    ],
    []
  );

  return (
    // View principal que ocupa toda a tela com fundo branco
    <View style={styles.safe}>
      {/* Cabeçalho personalizado com nome do app e nome do usuário */}
      <DashboardHeader
        appName="Meu app motorista"
        userName="João da Silva Santos"
      />

      {/* ScrollView com conteúdo dos cards de veículos */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false} // Esconde a barra de scroll
      >
        {/* Título da tela */}
        <Text style={styles.title}>Lista de Veículos</Text>
        
        {/* Container com os cards de veículos mapeados do array */}
        <View style={styles.list}>
          {vehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Definição dos estilos do componente
const styles = StyleSheet.create({
  // View raiz - ocupa toda a tela com fundo branco
  safe: { 
    flex: 1, 
    backgroundColor: "#FFFFFF" 
  },

  // Estilo do ScrollView - padding e altura do bottom nav
  content: {
    paddingHorizontal: 16, // Espaçamento lateral
    paddingTop: 14, // Espaçamento superior
    paddingBottom: 90, // Espaçamento inferior para não cobrir bottom nav
  },

  // Estilo do título "Lista de Veículos"
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16, // ← AQUI: ajuste o espaço abaixo do título (aumentar/diminuir este valor)
  },

  // Container dos cards - espaçamento entre cards
  list: { 
    gap: 16, // Distância entre cada card
    paddingHorizontal: 16, // Espaçamento lateral dos cards
  },

  placeholder: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
  },

  placeholderText: {
    fontSize: 14,
    color: "#444",
  },
});
