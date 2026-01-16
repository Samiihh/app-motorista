// Importações necessárias para esta tela de mapa
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SegmentedTabs from "@/components/dashboard/SegmentedTabs";
import VehicleCard from "@/components/dashboard/VehicleCard";
import React, { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

/**
 * TabKey - Tipo das abas suportadas pelo dashboard
 * Mantém type-safety ao alternar entre abas
 */
type TabKey = "Veículos" | "Mapas" | "Alertas" | "Bloqueios";

/**
 * MapsScreen - Tela de monitoramento por mapa
 * - Mostra cabeçalho, abas e mapa (imagem mock)
 * - Exibe card do veículo atualmente selecionado
 * TODO: integrar mapa real e seleção de veículo/ponto
 */
export default function MapsScreen() {
  /**
   * activeTab: aba ativa (começa em "Mapas")
   * setActiveTab: muda a aba quando o usuário toca em outra opção
   */
  const [activeTab, setActiveTab] = useState<TabKey>("Mapas");

  /**
   * selectedVehicle: veículo monitorado no mapa (mock)
   * useMemo([]) => calcula só uma vez na montagem
   * Substituir depois por dados vindos de API/estado global
   */
  const selectedVehicle = useMemo(
    () => ({
      id: "1",
      brand: "Chevrolet",
      model: "Trailblazer",
      plate: "ABC123",
      agent: "Marta Santos",
      location: "Perto da rua xyz",
      image: require("../../assets/images/trailblazerhcazuleclipse-2-2.png"),
    }),
    []
  );

  return (
    // View raiz com fundo branco
    <View style={styles.safe}>
      {/* Cabeçalho azul com nome do app e usuário */}
      <DashboardHeader appName="Meu app motorista" userName="João da Silva Santos" />

      {/* Conteúdo rolável da página */}
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Título da tela */}
        <Text style={styles.title}>Dashboard de monitoramento</Text>

        {/* Abas em formato "pílula" para alternar visualizações */}
        <SegmentedTabs<TabKey>
          items={["Veículos", "Mapas", "Alertas", "Bloqueios"]}
          active={activeTab}
          onChange={setActiveTab}
        />

        {/* Card do mapa (mockado com imagem) */}
        <View style={styles.mapCard}>
          <Pressable
            onPress={() => {
              // TODO: ação real ao tocar no mapa (ex: abrir modal ou marcar ponto)
              console.log("Mapa clicado");
            }}
          >
            <Image
              source={require("../../assets/images/map.png")}
              style={styles.mapImage}
              resizeMode="cover" // Cobre a área sem distorcer
            />
          </Pressable>
        </View>

        {/* Instrução rápida ao usuário */}
        <Text style={styles.helperText}>Clique no mapa para selecionar</Text>

        {/* Card do veículo atualmente selecionado */}
        <View style={styles.vehicleWrap}>
          <VehicleCard vehicle={selectedVehicle} />
        </View>
      </ScrollView>
    </View>
  );
}

/**
 * Stylesheet da tela de mapas
 * Comentários indicam o propósito de cada propriedade
 */
const styles = StyleSheet.create({
  // Container raiz ocupando toda a altura, fundo branco
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // Padding para o conteúdo rolável e respiro para a tab bar
  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 100, // Espaço para a bottom tab não cobrir o card
  },

  // Título principal da tela
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
    marginBottom: 12,
  },

  // Contêiner do mapa com cantos arredondados
  mapCard: {
    marginTop: 16,
    borderRadius: 22,
    backgroundColor: "#F3F4F6",
    overflow: "hidden", // Garante que a imagem respeite o raio
  },

  // Imagem mock do mapa
  mapImage: {
    width: "100%",
    height: 220,
  },

  // Texto de instrução centralizado
  helperText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "600",
  },

  // Wrapper para o card do veículo selecionado
  vehicleWrap: {
    marginTop: 16,
  },
});

