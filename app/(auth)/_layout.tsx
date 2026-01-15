// Importa o componente Stack para navegação em pilha
import { Stack } from "expo-router";

/**
 * AuthLayout - Layout para o grupo de autenticação
 * Agrupa todas as telas relacionadas à autenticação (login, registro, etc.)
 */
export default function AuthLayout() {
  // Stack cria uma navegação em pilha onde telas são empilhadas umas sobre as outras
  // headerShown: false remove o cabeçalho padrão de todas as telas neste grupo
  return <Stack screenOptions={{ headerShown: false }} />;
}
