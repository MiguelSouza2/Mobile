import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[base, setBase] = useState(0);
  const[altura, setAltura] = useState(0);
  const[area, setArea] = useState(0);


  function calcularArea(){
    if (base > 0 && altura > 0)
    {
      setArea((parseFloat(base) * parseFloat(altura)) / 2);
    }
    else
    {
      setArea('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo área do triângulo</Text>
      <Text style={styles.texto}>Digite um valor da base do triângulo: </Text>
      <TextInput
        placeholder='Digite o valor da base: '
        style={styles.caixatexto}
        keyboardType={'numeric'}
        onChangeText={base => setBase(base)}
      ></TextInput>
      <Text style={styles.texto}>Digite um valor da altura do triângulo: </Text>
      <TextInput
        placeholder='Digite o valor da base: '
        style={styles.caixatexto}
        keyboardType={'numeric'}
        onChangeText={altura => setAltura(altura)}
      ></TextInput>

      <Button
        style={styles.botao}
        title='Submit'
        onPress={calcularArea}
      ></Button>

      <Text style={styles.resul}>{area ? `Área Triangulo: ${area}` : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:
  {
    color: '#ffe',
    fontSize: 32,
    textAlign: 'center'
  },
  texto:
  {
    color: '#fae',
    fontSize: 20,
    textAlign: 'center'
  },
  caixatexto:
  {
    backgroundColor: '#005',
    borderWidth: 2,
    color: '#cae',
    textAlign: 'center'
  },
  resul: 
  {
    backgroundColor: '#005',
    borderWidth: 2,
    color: '#f0f',
    textAlign: 'center'
  }
});
