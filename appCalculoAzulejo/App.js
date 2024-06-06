import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [alturaP, setAlturaP] = useState(0);
  const [larguraP, setLarguraP] = useState(0);
  const [alturaA, setAlturaA] = useState(0);
  const [larguraA, setLarguraA] = useState(0);
  const [areaA, setAreaA] = useState(0);
  const [areaP, setAreaP] = useState(0);
  const [qtdA, setQtdA] = useState(0);

  function calcAzulejo() {
    //  CÁLCULO ÁREA
    setAreaA(parseFloat(alturaA) * (larguraA));
    setAreaP(parseFloat(alturaP) * (larguraP));
    // CÁLCULO QTD DE AZULEJO

    if (areaA > 0 && areaP > 0) {
      setQtdA(parseFloat(areaP) / parseFloat(areaA));
    }



  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA DE AZULEJO DA ETEC!!!</Text>

      {/* INPUTS PARA RECEBER  */}

      <Text style={styles.inp}>Digite a altura da parede</Text>
      <TextInput
        style={styles.input}
        onChangeText={alturaP => setAlturaP(alturaP)}
        keyboardType='numeric'
      ></TextInput>
      <Text style={styles.inp}>Digite a largura da parede</Text>
      <TextInput
        style={styles.input}
        onChangeText={larguraP => setLarguraP(larguraP)}
        keyboardType='numeric'
      ></TextInput>
      <Text style={styles.inp}>Digite a altura do azulejo</Text>
      <TextInput
        style={styles.input}
        onChangeText={alturaA => setAlturaA(alturaA)}
        keyboardType='numeric'
      ></TextInput>
      <Text style={styles.inp}>Digite a largura do azulejo</Text>
      <TextInput
        style={styles.input}
        onChangeText={larguraA => setLarguraA(larguraA)}
        keyboardType='numeric'
      ></TextInput>

      <Button
        onPress={calcAzulejo}
        title='submit'      
      ></Button>

      <Text style={styles.result}>{qtdA ? `Quantidade de azulejos necessários: ${qtdA} azulejo(s)` : ''}</Text>
      <Text style={styles.result}>{areaA ? `Área de cada azulejo: ${areaA}m²` : ''}</Text>
      <Text style={styles.result}>{areaP ? `Área da parede: ${areaP}m²` : ''}</Text>

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
    fontSize: 20
  },
  title: {
    fontSize: 25,
    color: '#a44',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    minWidth: 270,
    textAlign: 'center',
    borderRadius: 5,
    margin: 10
  },
  result: {
    fontStyle: 'bold'
  }
});

