import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
export default function App() {
  const [genero, setgenero] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [generoDigitado, setgeneroDigitado] = useState("");
  const [idadeDigitada, setIdadeDigitada] = useState("");
  const [alturaDigitada, setAlturaDigitada] = useState("");

  const [pesoDigitado, setPesoDigitado] = useState("");
  function exibir() {
    if (genero == "" || idade == "" || altura == "") {
      alert("Preencha todos os campos!");
    } else {
      setgeneroDigitado(genero);
      setIdadeDigitada(idade + " anos");
      setAlturaDigitada(altura + "m");
      setPesoDigitado(peso + "kg");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite seu gênero:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome aqui: "
        onChangeText={(genero) => setgenero(genero)}
      ></TextInput>
      <Text style={styles.texto}>Digite sua idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade aqui: "
        onChangeText={(idade) => setIdade(idade)}
      ></TextInput>
      <Text style={styles.texto}> Digite sua altura </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura aqui: "
        onChangeText={(altura) => setAltura(altura)}
      ></TextInput>
      <Text style={styles.texto}> Digite seu peso </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura aqui: "
        onChangeText={(peso) => setPeso(peso)}
      ></TextInput>
      <Button title="Exibir dados" onPress={exibir}></Button>

      <View style={styles.msg_container}>
        <Text style={styles.textoMSG}>Gênero digitado: {generoDigitado}</Text>
        <Text style={styles.textoMSG}>Idade digitada: {idadeDigitada}</Text>
        <Text style={styles.textoMSG}>Altura digitada: {alturaDigitada}</Text>
        <Text style={styles.textoMSG}>Peso digitado: {pesoDigitado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666a86",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    borderWidth: 3,
    borderColor: "#788AA3",
    height: 45,
    fontSize: 20,
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    color: "#92B6B1",
  },
  texto: {
    textAlign: "center",
    fontSize: 30,
    color: "#B2C9AB",
    paddingRight: 20,
  },
  textoMSG: {
    textAlign: "center",
    color: "#B2C9AB",
    fontSize: 30, 
  },
  msg_container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#E8DDB5",
    fontStyle: "italic",
    padding: 30
  }
});
