import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [dolar, setDolar] = useState(0);
  const [result, setResult] = useState(0);

  function conversione(){
    if(dolar > 0){
      setResult((parseFloat(dolar) * 4.98).toFixed(2));
    }
    else{
      setResult('');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Conversor de Dólar para Real:</Text>
      <TextInput
        style={styles.inp}
        onChangeText={dolar => setDolar(dolar)}
        placeholder='Dólar'
        keyboardType='numeric'
      ></TextInput>
      <Button
        onPress={conversione}
        title= 'Converter'
        style={styles.btn}
      ></Button>

      <Text style={styles.txt}>{result ? `Resultado: R$${result}` : ''}</Text>
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
  inp: {
    fontSize: 20,
    height: 50,
    textAlign: 'center',
    minWidth: 150,
    maxWidth: 300,
    borderWidth: 1,
    borderRadius: 5,
    margin: 15,
    padding: 10,
    color: '#Ab2f'
  },
  txt: {
    fontSize: 25,
  }
});
