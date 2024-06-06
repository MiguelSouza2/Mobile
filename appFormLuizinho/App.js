import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';

export default function App() {

  function sendInfo() {
    if (nome == '' || idade == '' || Pais == '' || GeneroFav) {
      alert("Preencha todos os campos!!");
    } else {
      alert('Nome: ' + nome + ' idade: ' + idade + 'Sexo: ' + checked);
    }
  }

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [Pais, setPais] = useState('');
  const [GeneroFav, setGeneroFav] = useState('');
  const [valor, setValor] = useState(15000);
  const [utilitario, setUtilitario] = useState(false);
  const [checked, setChecked] = useState('Masculino');
  return (
    <View style={styles.container}>
      <Text>Digite seu nome: </Text>
      <TextInput
        placeholder='digite aqui...'
        onChangeText={nome => setNome(nome)}
      ></TextInput>
      <Text>Digite sua idade: </Text>
      <TextInput
        placeholder='digite aqui...'
        onChangeText={idade => setIdade(idade)}
      ></TextInput>
      <Text>Digite seu gênero de anime favorito: </Text>
      <TextInput
        placeholder='digite aqui...'
        onChangeText={GeneroFav => setGeneroFav(GeneroFav)}
      ></TextInput>

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
