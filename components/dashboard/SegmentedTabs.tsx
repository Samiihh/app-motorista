// Importações necessárias
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

/**
 * Props genérico para o componente SegmentedTabs
 * T é um tipo string que representa as opções disponíveis
 */
type Props<T extends string> = {
  items: T[]; // Array de opções (ex: ["Veículos", "Mapas", "Alertas"])
  active: T; // Opção ativa atualmente
  onChange: (item: T) => void; // Callback quando opção é clicada
};

/**
 * SegmentedTabs - Componente de abas em estilo "pílula"
 * Permite alternar entre múltiplas opções com feedback visual
 * Genérico: funciona com qualquer tipo de string
 */
export default function SegmentedTabs<T extends string>({
  items,
  active,
  onChange,
}: Props<T>) {
  return (
    <View style={styles.row}>
      {/* Mapeia cada item e cria um botão tipo "pílula" */}
      {items.map((item) => {
        // Define se este item é o ativo
        const isActive = item === active;

        return (
          <Pressable
            key={item}
            onPress={() => onChange(item)} // Chama callback ao clicar
            style={[
              styles.chip, // Estilos base
              isActive ? styles.chipActive : styles.chipIdle // Estilos condicionais
            ]}
          >
            <Text
              style={[
                styles.chipText, // Estilos de texto base
                isActive ? styles.chipTextActive : styles.chipTextIdle, // Estilos de texto condicionais
              ]}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  // Container principal - distribui abas em linha
  row: {
    flexDirection: "row", // Disposição horizontal
    gap: 10, // Espaçamento entre abas
    flexWrap: "wrap", // Quebra linha se necessário
    justifyContent: "center", // Centraliza horizontalmente
  },

  // Estilo base de cada aba (chip/pílula)
  chip: {
    paddingHorizontal: 14, // Espaçamento lateral
    paddingVertical: 8, // Espaçamento vertical
    borderRadius: 18, // Faz o formato de pílula (arredondado)
    borderWidth: 1.5, // Borda visível
  },

  // Aba ativa (selecionada)
  chipActive: {
    backgroundColor: "#0B63CE", // Fundo azul
    borderColor: "#0B63CE", // Borda azul
  },

  // Aba inativa (não selecionada)
  chipIdle: {
    backgroundColor: "#FFFFFF", // Fundo branco
    borderColor: "#6B7280", // Borda cinza
  },

  // Texto base das abas
  chipText: { 
    fontSize: 14,
    fontWeight: "700", // Bold
  },

  // Texto quando aba está ativa
  chipTextActive: { 
    color: "#FFFFFF" // Branco
  },

  // Texto quando aba está inativa
  chipTextIdle: { 
    color: "#111827" // Cinza escuro
  },
});
