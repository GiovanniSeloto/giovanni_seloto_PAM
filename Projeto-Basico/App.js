import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // View é um componente equivalente a uma div                           
    <View style={estilos.container}>
      <Text style={estilos.texto}>Oi, tudo bem!?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color:'#f00',
  }
});
