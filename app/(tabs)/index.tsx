// Importações necessárias para o funcionamento do componente
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Componentes customizados do projeto
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SegmentedTabs from "@/components/dashboard/SegmentedTabs";
import VehicleCard from "@/components/dashboard/VehicleCard";

/**
 * Define o tipo das abas disponíveis no dashboard
 * Garante que apenas valores válidos sejam usados em toda a aplicação
 * Valor: "Veículos" | "Mapas" | "Alertas" | "Bloqueios"
 */
type TabKey = "Veículos" | "Mapas" | "Alertas" | "Bloqueios";

/**
 * DashboardScreen - Tela principal do aplicativo (aba inicial)
 * 
 * Esta é a tela padrão que aparece quando o app é aberto
 * Exibe um dashboard com:
 * - Cabeçalho com nome do app e do usuário
 * - Abas para alternar entre diferentes visualizações
 * - Lista de veículos quando aba "Veículos" está ativa
 * - Conteúdo placeholder para outras abas
 */
export default function DashboardScreen() {
  /**
   * activeTab: Estado que rastreia qual aba está selecionada
   * Inicia com "Veículos" como aba padrão
   * 
   * setActiveTab: Função para atualizar o estado quando usuário clica em outra aba
   */
  const [activeTab, setActiveTab] = useState<TabKey>("Veículos");

  /**
   * vehicles: Array de dados dos veículos
   * 
   * useMemo é usado para:
   * - Memorizar o array e não recalcular a cada render
   * - [] como dependência = só executa uma vez na montagem
   * 
   * TODO: Depois substituir esses dados mock por:
   * - Chamada a uma API backend
   * - Ou um estado global (Redux, Context API, etc)
   */
  const vehicles = useMemo(
    () => [
      // Primeiro veículo - Chevrolet Trailblazer azul
      {
        id: "1", // ID único para a chave React
        brand: "Chevrolet", // Marca do veículo
        model: "Trailblazer", // Modelo
        plate: "ABC123", // Placa de identificação
        agent: "Marta Santos", // Motorista/agente responsável
        location: "Perto da rua xyz", // Localização atual
        image: require("../../assets/images/trailblazerhcazuleclipse-2-2.png"), // Imagem do carro
      },
      // Segundo veículo - Chevrolet Trailblazer preto
      {
        id: "2",
        brand: "Chevrolet",
        model: "Trailblazer",
        plate: "ABC123",
        agent: "Lucas Alves",
        location: "Perto da rua DFG",
        image: require("../../assets/images/Trailblazer-Preto-Ouro-Negro1.png"),
      },
    ],
    [] // Dependências vazias = executa apenas uma vez
  );

  return (
    // View raiz que ocupa toda a altura disponível com fundo branco
    <View style={styles.safe}>
      {/* 
        Cabeçalho personalizado do dashboard
        Props:
        - appName: "Meu app motorista" (título do app)
        - userName: "João da Silva Santos" (nome do usuário logado)
      */}
      <DashboardHeader
        appName="Meu app motorista"
        userName="João da Silva Santos"
      />

      {/*
        ScrollView: permite scroll vertical quando conteúdo excede a tela
        contentContainerStyle: aplica estilos ao conteúdo interno
        showsVerticalScrollIndicator: esconde a barra de scroll no lado direito
      */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Título principal da tela */}
        <Text style={styles.title}>Dashboard de monitoramento</Text>

        {/*
          Componente SegmentedTabs: cria abas estilizadas
          
          Props:
          - items: array de opções ["Veículos", "Mapas", "Alertas", "Bloqueios"]
          - active: a aba ativa atual (controlada pelo estado activeTab)
          - onChange: função chamada quando usuário clica em uma aba
          
          O <TabKey> é um genérico TypeScript que garante type-safety
        */}
        <SegmentedTabs<TabKey>
          items={["Veículos", "Mapas", "Alertas", "Bloqueios"]}
          active={activeTab}
          onChange={setActiveTab}
        />

        {/*
          Renderização condicional: só mostra os cards quando aba "Veículos" está ativa
          
          activeTab === "Veículos" ? <mostrar cards> : <não mostrar>
          
          Isso evita renderizar cards desnecessários quando usuário está em outra aba
        */}
        {activeTab === "Veículos" && (
          <View style={styles.list}>
            {/* 
              map(): itera sobre o array de veículos
              key: prop obrigatória do React para identificar elementos únicos
              <VehicleCard>: componente que exibe as informações de cada veículo
            */}
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </View>
        )}

        {/*
          Renderização condicional: mostra placeholder quando NÃO está em "Veículos"
          
          activeTab !== "Veículos" ? <mostrar placeholder> : <não mostrar>
          
          TODO: Depois substituir este placeholder pelos conteúdos reais de:
          - Mapas (mapa interativo)
          - Alertas (lista de alertas)
          - Bloqueios (controles de bloqueio do veículo)
        */}
        {activeTab !== "Veículos" && (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>
              Conteúdo da aba: {activeTab}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

/**
 * ESTILOS DO COMPONENTE
 * 
 * StyleSheet é uma otimização do React Native que:
 * - Valida os valores em tempo de desenvolvimento
 * - Converte em números inteiros para melhor performance
 * - Reduz o bundle size
 */
const styles = StyleSheet.create({
  /**
   * safe: View raiz que ocupa toda a tela
   * - flex: 1 = ocupa 100% da altura disponível
   * - backgroundColor: fundo branco puro
   */
  safe: { 
    flex: 1, 
    backgroundColor: "#FFFFFF" 
  },

  /**
   * content: Estilos do ScrollView
   * - paddingHorizontal: espaço lateral (16px em cada lado)
   * - paddingTop: espaço acima do conteúdo
   * - paddingBottom: espaço abaixo (90px = altura do bottom nav + margem)
   * 
   * O paddingBottom garante que o último item não fique
   * coberto pela barra de navegação inferior
   */
  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 90, // Espaço para o BottomNav não cobrir conteúdo
  },

  /**
   * title: Estilo do texto "Dashboard de monitoramento"
   * - textAlign: "center" = centraliza o texto
   * - fontSize: 18 = tamanho do texto em pixels
   * - fontWeight: "700" = texto em negrito (bold)
   * - color: "#111" = cor escura próxima ao preto
   * - marginBottom: 12 = espaço abaixo do título
   */
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
  },

  /**
   * list: Container que agrupa todos os cards de veículos
   * - gap: 16 = espaço entre cada card (flexbox gap)
   * - marginTop: 18 = espaço acima da lista
   */
  list: { 
    gap: 16, 
    marginTop: 18 
  },

  /**
   * placeholder: Estilo da caixa mostrada nas abas vazias
   * - marginTop: 24 = espaço acima
   * - padding: 16 = espaço interno
   * - borderRadius: 16 = cantos arredondados
   * - backgroundColor: fundo cinza claro
   */
  placeholder: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
  },

  /**
   * placeholderText: Texto dentro do placeholder
   * - fontSize: 14 = texto pequeno
   * - color: "#444" = cinza médio
   */
  placeholderText: {
    fontSize: 14,
    color: "#444",
  },
});
