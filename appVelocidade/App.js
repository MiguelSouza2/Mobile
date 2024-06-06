import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [distancia, setDistancia] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [VelocidadeMS, setVelocidadeMS] = useState(0);
  const [VelocidadeKM, setVelocidadeKM] = useState(0);

  function calcularVelocidade() {

    if (!(tempo == 0 && distancia == 0)) {
      setVelocidadeMS(parseFloat(distancia) / parseFloat(tempo));
      setVelocidadeKM((parseFloat(distancia) / 1000) / (parseFloat(tempo) / 3600));
    }else{
      setVelocidadeKM();
      setVelocidadeMS();
    }
    
  }

  return (
    <View style={styles.container}>
      <Text>Digite a distância em metros</Text>
      <TextInput
        placeholder='insira aqui'
        onChangeText={distancia => setDistancia(distancia)}
        style={styles.input}
      ></TextInput>
      <Text>Digite o tempo em segundos</Text>
      <TextInput
        placeholder='insira aqui'
        onChangeText={tempo => setTempo(tempo)}
        style={styles.input}
      ></TextInput>
      <Button
        title='submit'
        onPress={calcularVelocidade}
      ></Button>
      <Text>{VelocidadeKM ? `Velocidade em KM/H: ${VelocidadeKM}` : ''}</Text>
      <Text>{VelocidadeMS ? `Velocidade em M/S: ${VelocidadeMS}` : ''}</Text>
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
