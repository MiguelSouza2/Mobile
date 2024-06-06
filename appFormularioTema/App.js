import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [GeneroFav, setGeneroFav] = useState('');
  const [animeFav, setAnimeFav] = useState('');
  const [anime, setAnime] = useState('');
  const [valor, setValor] = useState(1);
  const [otaku, setOtaku] = useState(false)
  const [checked, setChecked] = useState(true);
  const listaAnimes = [
    { animeNome: 'none', valor: 0 },
    { animeNome: 'Attack on Titan', valor: 1 },
    { animeNome: 'Naruto', valor: 2 },
    { animeNome: 'Pokémon', valor: 3 },
    { animeNome: 'Vinland Saga', valor: 4 },
    { animeNome: 'Boku no hero', valor: 5 }
  ]

  function sendInfo() {
    if (nome == '' || idade == '' || GeneroFav == '' || animeFav == '' && anime == 0) {
      alert("Preencha todos os campos!!");
    } else if (!(anime == 0)) {
      alert('Nome: '
        + nome
        + '\nidade: '
        + idade
        + '\nSexo: '
        + checked
        + '\nGênero favorito de anime: '
        + GeneroFav + '\nAnime favorito: '
        + listaAnimes[anime].animeNome
        + '\nEps de One Piece vistos: ' + valor.toFixed(0)
        + ' episódios' 
        + '\nSe considera otaku: ' + (otaku ? 'Sim' : 'Não' ));
    } else {
      alert('Nome: '
        + nome
        + '\nidade: '
        + idade
        + '\nSexo: '
        + checked
        + '\nGênero favorito de anime: '
        + GeneroFav + '\nAnime favorito: ' + animeFav
        + '\nEps de One Piece vistos: ' + valor.toFixed(0)
        + ' episódios' 
        + '\nSe considera otaku: ' + (otaku ? 'Sim' : 'Não' ));
    }

  }
  let animeItens = listaAnimes.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.animeNome}></Picker.Item>
  });

  return (
    <View style={styles.container}>
      <View style={styles.areaformulario}>

        <Text>Digite seu nome: </Text>
        <TextInput

          style={styles.input}
          placeholder='digite aqui...'
          onChangeText={nome => setNome(nome)}
        ></TextInput>
        <Text>Digite sua idade: </Text>
        <TextInput
          style={styles.input}
          placeholder='digite aqui...'
          onChangeText={idade => setIdade(idade)}
        ></TextInput>

        <View style={styles.areaRadio}>

          <Text>Sexo: </Text>
          <RadioButton
            value='Masculino'
            status={checked == 'Masculino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Masculino')}
          ></RadioButton>
          <Text>Masculino</Text>
          <RadioButton
            value='Feminino'
            status={checked == 'Feminino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Feminino')}
          ></RadioButton>
          <Text>Feminino</Text>

        </View>

        <View style={styles.areaModelo}>
          <Text>Digite seu gênero de anime favorito: </Text>
          <TextInput
            style={styles.input}
            placeholder='digite aqui...'
            onChangeText={GeneroFav => setGeneroFav(GeneroFav)}
          ></TextInput>
          <View>
            <Text>Você gosta de um dos animes abaixo? </Text>
            <Picker
              style={styles.pickerModelo}
              selectedValue={anime}
              onValueChange={(itemValue, itemIndex) => setAnime(itemValue)}
            >
              {animeItens}
            </Picker>
          </View>
          <View>
            <Text>Outro: </Text>
            <TextInput

              style={styles.input}
              placeholder='digite aqui...'
              onChangeText={animeFav => setAnimeFav(animeFav)}
            ></TextInput>

          </View>

        </View>
        <View>
          <Text style={styles.labelName}>Quantos episódios de One Piece você já assistiu?</Text>
          <Text>{valor.toFixed(0)} episódios</Text>
          <Slider
            minimumTrackTintColor='#9ee'
            minimumValue={1}
            maximumValue={1200}
            value={valor}
            onValueChange={(valor) => setValor(valor)}
          >
          </Slider>
        </View>
        <View>
          <Text>Se considera otaku?</Text>
          <Switch
            style={{ paddingTop: 15 }}
            value={otaku}
            onValueChange={(otaku) => setOtaku(otaku)}
          >

          </Switch>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={sendInfo}
        >
          <Text style={styles.botaoTexto}>Mostra dados anime</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#abcd',

  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  areaRadio: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  areaModelo: {
    alignItems: 'center',
    paddingBottom: 5
  },

  botao: {
    backgroundColor: 'green',
    width: '60%',
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#000',
    width: '90%',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    justifyContent: "center",
    marginHorizontal: 5,
    alignSelf: "center",
    backgroundColor: '#fff',
    height: 45,
  },
  titulo:
  {
    fontSize: 22,
    color: "#000",
    marginLeft: 23,
    marginTop: 15,
    fontWeight: 'bold'
  }
});
