import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [nome,  setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [nomeDigitado, setNomeDigitado] = useState("");
  const [idadeDigitada, setIdadeDigitada] = useState("");
  const [alturaDigitada, setAlturaDigitada] = useState("");                                                                                                                                                                          
  const [pesoDigitado, setPesoDigitado] = useState("");                                                                                                                                                                          

  function exibir() {
    if (nome == "" || idade == "" || altura == "") {
      alert("Preencha todos os campos!");
    }
    else{
      setNomeDigitado(nome);
      setIdadeDigitada(idade);
      setAlturaDigitada(altura);
      setPesoDigitado(peso);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome aqui: "
        onChangeText={(nome) => setNome(nome)}
      ></TextInput>
      <Text style={styles.texto}>Digite sua idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade aqui: "
        onChangeText={(idade) => setIdade(idade)}
      ></TextInput>
      <Text style={styles.texto}>
          Digite sua altura
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura aqui: "
        onChangeText={(altura) => setAltura(altura)}
      ></TextInput>
      <Text style={styles.texto}>
          Digite seu peso
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura aqui: "
        onChangeText={(peso) => setPeso(peso)}
      ></TextInput>

      <Button title="Exibir dados" onPress={exibir}></Button>
      <Text style={styles.textoMSG}>Nome Digitado: {nomeDigitado}</Text>
      <Text style={styles.textoMSG}>idade digitada: {idadeDigitada} anos</Text>
      <Text style={styles.textoMSG}>altura digitada: {alturaDigitada}m</Text>
      <Text style={styles.textoMSG}>peso digitado: {pesoDigitado}kg</Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: 200,
      borderWidth: 3,
      borderColor: '#aaa000',
      height: 45,
      fontSize: 20,
      alignItems: 'center',
      padding: 10,
      marginBottom: 20
    },
    texto:{
      textAlign: 'center',
      fontSize: 30,
      color: '#92fd43',
      paddingRight: 20
    },
    textoMSG: {
      textAlign: 'center',
      color: 'pink',
      fontSize: 30
    }
  });
