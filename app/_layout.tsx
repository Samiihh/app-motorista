// Importações para temas e navegação
import {
  DarkTheme, // Tema escuro do React Navigation
  DefaultTheme, // Tema claro do React Navigation
  ThemeProvider, // Provider que aplica o tema em todo o app
} from "@react-navigation/native";
import { Stack } from "expo-router"; // Navegação em pilha
import { StatusBar } from "expo-status-bar"; // Controla a barra de status do sistema
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated"; // Biblioteca de animações

import { useColorScheme } from "@/hooks/use-color-scheme";

/**
 * RootLayout - Layout raiz do aplicativo
 * Define a estrutura de navegação principal e aplica temas
 */
export default function RootLayout() {
  // Hook que detecta se o dispositivo está em modo claro ou escuro
  const colorScheme = useColorScheme();

  return (
    // GestureHandlerRootView: necessário para react-native-gesture-handler funcionar
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* ThemeProvider: aplica o tema (claro/escuro) em todo o app baseado no sistema */}
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* Stack: navegação em pilha (screens empilhadas umas sobre as outras) */}
        <Stack screenOptions={{ headerShown: false }}>
          {/* Tela inicial - Splash screen que redireciona para login */}
          <Stack.Screen name="index" />
          
          {/* Grupo (auth) - contém as telas de autenticação (login, registro, etc) */}
          <Stack.Screen name="(auth)" />

          {/* Grupo (tabs) - contém as telas principais com navegação por abas */}
          <Stack.Screen name="(tabs)" />

          {/* Modal - tela que abre sobre as outras com animação de baixo para cima */}
          <Stack.Screen
            name="modal"
            options={{ 
              presentation: "modal", // Animação: sobe de baixo (estilo modal)
              title: "Modal" // Título exibido no cabeçalho do modal
            }}
          />
        </Stack>
        {/* StatusBar: controla cor/estilo da barra de status do sistema (hora, bateria, etc) */}
        {/* style="auto": ajusta automaticamente (claro no tema claro, escuro no tema escuro) */}
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
