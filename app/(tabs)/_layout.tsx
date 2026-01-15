// TabLayout - Define a navegação por abas do aplicativo (Home e Explore)
// Este arquivo configura as abas com ícones e feedback tátil
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab'; // Substitui o botão padrão da tab para dar feedback tátil
import { IconSymbol } from '@/components/ui/icon-symbol'; // Componente de ícone (SF Symbols / plataforma)
import { Colors } from '@/constants/theme'; // Paleta de cores por tema claro/escuro
import { useColorScheme } from '@/hooks/use-color-scheme'; // Detecta se o app está em modo claro ou escuro

export default function TabLayout() {
  // Obtém o tema atual do dispositivo ("light" ou "dark")
  const colorScheme = useColorScheme();

  // Configura a navegação por abas (Tabs) com ícones e botão com haptics
  // Observação: dentro de <Tabs>, apenas <Tabs.Screen> são filhos válidos
  // Renderiza as abas principais do app
  return (
    <Tabs
      screenOptions={{
        // Cor da etiqueta/ícone da aba quando ativa, baseada no tema atual
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Oculta o cabeçalho padrão das páginas dentro das tabs
        headerShown: false,
        // Substitui o botão da aba por um componente com feedback tátil
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home', // Título exibido na aba
          // Ícone da aba: usa IconSymbol com tamanho fixo e cor fornecida pelo sistema
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore', // Título exibido na aba
          // Ícone da aba: papel avião, com cor dinâmica conforme estado
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
