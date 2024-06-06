import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu nome é Sor Luizinho do Mustang verde</Text>
      <Text>Minha idade é de 18 anos</Text>
      <Text>Moro na Barra do Chapéu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
