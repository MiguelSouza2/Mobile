import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  
  function calcSoma(){
    if(num1 > 0 && num2 > 0){
      setResult(parseInt(num1) + parseInt(num2));
    }
  }

  return (
    <View style={styles.container}>
      <Text>Calculadora soma</Text>
      <Text>Digite o primeiro number: </Text>
      <TextInput
        style={styles.caixa}
        placeholder='Digite um number'
        onChangeText={num1=>setNum1(num1)}
      ></TextInput>
      <Text>Digite outro number: </Text>
      <TextInput
        style={styles.caixa}
        placeholder='Digite other number'
        onChangeText={num2=>setNum2(num2)}
      ></TextInput>

      <Button
        title='Calcular'
        onPress={calcSoma}
        
      ></Button>

      <Text>{result ? `Resultado ${result}` : ''}</Text>
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
