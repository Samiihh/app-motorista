// ModalScreen - Tela modal de exemplo
// Demonstra como criar uma tela que abre sobre as outras com apresentação modal
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text'; // Texto com tema
import { ThemedView } from '@/components/themed-view'; // View com tema

/**
 * ModalScreen - Exemplo de tela modal
 * Abre sobre a navegação atual e pode ser fechada deslizando para baixo
 */
export default function ModalScreen() {
  return (
    // Container centralizado vertical e horizontalmente
    <ThemedView style={styles.container}>
      {/* Título do modal */}
      <ThemedText type="title">This is a modal</ThemedText>
      
      {/* Link para fechar o modal e voltar à home */}
      {/* dismissTo: fecha o modal ao invés de navegar */}
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

// Estilos da tela modal
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    padding: 20, // Espaçamento interno
  },
  link: {
    marginTop: 15, // Espaço acima do link
    paddingVertical: 15, // Espaçamento vertical interno (área clicável maior)
  },
});
