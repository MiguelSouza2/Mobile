import React, { use, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { Switch } from "react-native";

export default function App() {
  const formatPhoneNumber = (text) => {
    // Remove todos os caracteres que não são números
    let cleaned = text.replace(/\D/g, '');
  
    // Formata o telefone para o padrão (XX) XXXXX-XXXX
    if (cleaned.length > 10) {
      return cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (cleaned.length > 6) {
      return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (cleaned.length > 2) {
      return cleaned.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      return cleaned;
    }
  };

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState(0);
  const [limite, setLimite] = useState(100);
  const [estudante, setEstudante] = useState(false);
  const sexos = [
    { sexoNome: "Masculino", valor: 1 },
    { sexoNome: "Feminino", valor: 2 },
  ];

  function enviarDados() {
    if (nome == "" || telefone == "") {
      alert("Preencha todos os dados corretamente.");
      return;
    }
    alert(
      "Conta Aberta com sucesso!! \n \n" +
        "Nome: " +
        nome +
        "\n" +
        "Telefone: " +
        telefone +
        "\n" +
        "Sexo: " +
        sexos[sexo].sexoNome +
        "\n" +
        "Limite Conta: " +
        limite.toFixed(2) +
        "\n" +
        "Conta Estudante " +
        (estudante ? "Ativo" : "Inativo") +
        "\n"
    );
  }

  let sexoItems =sexos.map((v,k) => {
    return <Picker.Item key = {k} value = {k} label = {v.sexoNome}></Picker.Item>
  })

  //para colocar alinhado o botão switch sobre a linha quando usamos o web
  const isWeb = typeof navigator !== "undefined" && navigator.userAgent;


  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagemfundo}
        source={require('./assets/fundo.jpg')}
      >


      <Text style={styles.bancoLogo}>Luizinhos's bank</Text>
      <Image
        style={styles.image}
        source={require('./assets/celular.png')}
      >

      </Image>
      <View style={styles.areaformulario}>
        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={(nome) => setNome(nome)}
        ></TextInput>

        <Text style={styles.textoNome}>Telefone:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, padding: 10, fontSize: 16 }}
          placeholder="(99)9999-9999"
          value={telefone}
          keyboardType="numeric"
          onChangeText={(text) => setTelefone(formatPhoneNumber(text))}
          maxLength={15}
        ></TextInput>
        <Text>Telefone: {telefone}</Text>

        <View style={styles.areaSexo}>
          <Text style={styles.textoNome}>Sexo:</Text>
          <Picker
            style={styles.pickerSexo}
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
          >
                {sexoItems}
          </Picker>
      
        </View>

        <View style={styles.limiteArea}>
          <Text style={styles.textoNome}>Seu limite: </Text>
          <Text style={styles.limiteTexto}>R$ {limite.toFixed(0)}</Text>
        </View>

        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor="#a542aa"
            minimumValue={100}
            maximumValue={5000}
            value={limite}
            onValueChange={(limite) => setLimite(limite)}
          >

          </Slider>
        </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Estudante</Text>
          <Switch
            style={isWeb ? {transform: [{translate: -2}]} : {} }
            trackColor={{ false: "#D17D98", true: "#4caf50" }}
            thumbColor="#C62300"
            value={estudante}
            onValueChange={(estudante) => setEstudante(estudante)}
          ></Switch>

          <TouchableOpacity style={styles.botao} onPress={enviarDados}>
            <Text style={styles.botaoTexto}>Abrir conta</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43a766"
  },
  texto: {
    fontSize: 24,
  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10,
    gap: 25
  },
  textoNome:{
    fontSize: 17,
    color: '#F14A00',
    fontWeight: 'bold',
  },
  bancoLogo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#C62300'
  },
  areaSexo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
},
  pickerSexo:{
    flex:1
  },
  limiteArea:{
    flexDirection:'row',
    paddingBottom: 5,
  },
  limiteTexto:{
    color: '#FF0000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaEstudante:{
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  botao:{
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 150,
    margin: 20, 
    height: 50,
    width: 150

  },
  botaoTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  imagemfundo:{
    resizeMode:"cover",
    height: 'auto',
    width: 'auto',
    top: -4
  },
  image:{
    width: 100, 
    height: 100,
    top: -3,
    paddingLeft: 540,
    resizeMode:"contain",
  }
  });
