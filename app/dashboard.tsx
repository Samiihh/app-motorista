// Importações base do React/React Native
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componentes customizados do projeto
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SegmentedTabs from "@/components/dashboard/SegmentedTabs";
import VehicleCard from "@/components/dashboard/VehicleCard";

/**
 * TabKey - Abas disponíveis no dashboard
 * Mantém type-safety ao alternar entre as opções
 */
type TabKey = "Veículos" | "Mapas" | "Alertas" | "Bloqueios";

/**
 * DashboardScreen - Tela principal do aplicativo
 * Exibe o cabeçalho, abas e a lista de veículos ou um placeholder das demais abas
 */
export default function DashboardScreen() {
  // Estado controlado da aba ativa (inicia em "Veículos")
  const [activeTab, setActiveTab] = useState<TabKey>("Veículos");

  // Lista mockada de veículos; substituir por API/estado global posteriormente
  const vehicles = useMemo(
    () => [
      {
        id: "1",
        brand: "Chevrolet",
        model: "Trailblazer",
        plate: "ABC123",
        agent: "Marta Santos",
        location: "Perto da rua xyz",
        image: require("../assets/images/trailblazerhcazuleclipse-2-2.png"),
      },
      {
        id: "2",
        brand: "Chevrolet",
        model: "Trailblazer",
        plate: "ABC123",
        agent: "Lucas Alves",
        location: "Perto da rua DFG",
        image: require("../assets/images/Trailblazer-Preto-Ouro-Negro1.png"),
      },
    ],
    []
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* Cabeçalho com nome do app e do usuário */}
      <DashboardHeader
        appName="Meu app motorista"
        userName="João da Silva Santos"
      />

      {/* Conteúdo rolável do dashboard */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Título principal da tela */}
        <Text style={styles.title}>Dashboard de monitoramento</Text>

        {/* Abas tipo "pílula" para alternar entre visões */}
        <SegmentedTabs<TabKey>
          items={["Veículos", "Mapas", "Alertas", "Bloqueios"]}
          active={activeTab}
          onChange={setActiveTab}
        />

        {/* Lista de veículos: renderiza apenas na aba "Veículos" */}
        {activeTab === "Veículos" && (
          <View style={styles.list}>
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </View>
        )}

        {/* Placeholder simples para demais abas (mock) */}
        {activeTab !== "Veículos" && (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>
              Conteúdo da aba: {activeTab}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" }, // Ocupa a tela e define fundo branco

  content: {
    paddingHorizontal: 16, // Respiro lateral
    paddingTop: 14, // Espaço superior
    paddingBottom: 90, // Espaço para a bottom tab não cobrir o conteúdo
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
  },

  list: { gap: 16, marginTop: 18 }, // Espaço entre cards e afastamento do título

  placeholder: {
    marginTop: 24, // Distância do conteúdo anterior
    padding: 16, // Respiro interno
    borderRadius: 16, // Cantos arredondados
    backgroundColor: "#F3F4F6", // Fundo cinza claro
  },

  placeholderText: {
    fontSize: 14,
    color: "#444",
  },
});
