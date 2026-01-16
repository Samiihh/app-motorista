// Importações necessárias
import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

/**
 * Tipo que define a estrutura de dados de um veículo
 */
type Vehicle = {
  id: string; // Identificador único
  brand: string; // Marca do veículo (ex: Chevrolet)
  model: string; // Modelo (ex: Trailblazer)
  plate: string; // Placa do veículo
  agent: string; // Nome do agente/motorista
  location: string; // Localização atual
  image: ImageSourcePropType; // Imagem do veículo
};

/**
 * Props do componente VehicleCard
 */
type Props = {
  vehicle: Vehicle; // Dados do veículo a exibir
};

/**
 * VehicleCard - Card que exibe informações de um veículo
 * Mostra marca, modelo, placa, agente, localização e imagem do carro
 */
export default function VehicleCard({ vehicle }: Props) {
  return (
    <View style={styles.card}>
      {/* Bloco esquerdo com informações de texto */}
      <View style={styles.left}>
        {/* Marca do veículo */}
        <Text style={styles.brand}>{vehicle.brand}</Text>
        {/* Modelo do veículo */}
        <Text style={styles.model}>{vehicle.model}</Text>

        {/* Metadados: placa e agente */}
        <View style={styles.meta}>
          <Text style={styles.metaText}>Placa: {vehicle.plate}</Text>
          <Text style={styles.metaText}>Agente: {vehicle.agent}</Text>
        </View>

        {/* Localização do veículo */}
        <Text style={styles.location}>{vehicle.location}</Text>
      </View>

      {/* Imagem do veículo alinhada à direita */}
      <Image source={vehicle.image} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Card principal com imagem e textos
  card: {
    height: 190, // Altura fixa
    borderRadius: 22, // Cantos arredondados
    padding: 16, // Espaçamento interno
    backgroundColor: "#1E90FF", // Fundo azul vibrante
    overflow: "hidden", // Corta conteúdo que ultrapassa
    flexDirection: "row", // Disposição horizontal
    alignItems: "flex-end", // Alinha itens no final vertical
    justifyContent: "space-between", // Espaça itens
  },

  // Container dos textos
  left: { 
    flex: 1, // Ocupa espaço disponível
    gap: 8 // Espaçamento entre elementos
  },

  // Marca (ex: Chevrolet)
  brand: { 
    color: "#EAF2FF", // Azul claro
    fontSize: 16,
    fontWeight: "500",
  },

  // Modelo (ex: Trailblazer)
  model: { 
    color: "#FFFFFF", // Branco
    fontSize: 28,
    fontWeight: "900", // Extra bold
    lineHeight: 36 // Altura da linha para melhor legibilidade
  },

  // Container de metadados (placa e agente)
  meta: { 
    gap: 2, // Pequeno espaçamento entre linhas
    marginTop: 6 // Espaçamento acima
  },

  // Texto de metadados
  metaText: { 
    color: "#EAF2FF",
    fontSize: 14,
    fontWeight: "500",
  },

  // Localização do veículo
  location: { 
    color: "#EAF2FF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8 // Espaçamento acima
  },

  // Imagem do veículo
  image: {
    width: 160, // Largura fixa
    height: 100, // Altura fixa
    marginLeft: 10, // Espaçamento à esquerda
  },
});
