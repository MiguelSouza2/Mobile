import React, { use, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
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
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tenis, setTenis] = useState(0);
  const [pagamento, setPagamento] = useState(0)
  const [limite, setLimite] = useState(0);
  const [estudante, setEstudante] = useState(false);
  const [imagem, setImagem] = useState(require("./assets/tenis1.png"));


  const tenises = [
    { tenisDesc: "Nike Air -- R$599,99", valor: 1 },
    { tenisDesc: "Adidas Superstar -- R$850,00", valor: 2 },
    { tenisDesc: "Converse -- R$247,50", valor: 3 },
    { tenisDesc: "Vans Old Skool -- R$199,99", valor: 4 },
  ];
  const tenisesImg = [
      {tenisNome: "Nike", img: require("./assets/tenis1.png")},
      {tenisNome: "Adidas", img: require("./assets/tenis2.png")},
      {tenisNome: "Converse", img: require("./assets/tenis3.png")},
      {tenisNome: "Vans", img: require("./assets/tenis4.png")}
  ];
  const metodosPagamento = [
    { metodo: "Pix", valor: 1 },
    { metodo: "Mastercard **** 0345", valor: 2 },
    { metodo: "Visa ****2434", valor: 3 },
    { metodo: "Boleto", valor: 4 },
  ];



  function enviarDados() {
    if (nome == "" || telefone == "") {
      alert("Preencha todos os dados corretamente.");
      return;
    }
    alert(
      "Tenis comprado com sucesso!! \n \n" +
        "Nome: " +
        nome +
        "\n" +
        "Telefone: " +
        telefone +
        "\n" +
        "Tenis: " +
        tenises[tenis].tenisDesc +
        "\n" +
        "Imagem de referência: " +
        limite.toFixed(0) +
        "\n" +
        "Conta Atleta " +
        (estudante ? "Ativo" : "Inativo") +
        "\n"
    );
  }

  let tenisItems =tenises.map((v,k) => {
    return <Picker.Item key = {k} value = {k} label = {v.tenisDesc}></Picker.Item>
  })

  let metodoItems =metodosPagamento.map((v,k) => {
    return <Picker.Item key = {k} value = {k} label = {v.metodo}></Picker.Item>
  })

  //para colocar alinhado o botão switch sobre a linha quando usamos o web
  const isWeb = typeof navigator !== "undefined" && navigator.userAgent;

  function mudarImagem(v){
    tenisAtual = tenisesImg[v].tenisNome;
    imgTenisAtual = tenisesImg[v].img;
    setImagem(imgTenisAtual);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground
        style={styles.imagemfundo}
        source={require('./assets/tenis.png')}
      >

    <View style={{
      backgroundColor: "#FFF",
      width: "80%",
      borderRadius: 10,
      padding: 20,
      marginVertical: 10,
      margin: "auto"
    }}>
      <Text style={styles.bancoLogo}>Comprar seu tênis</Text>
        <Image
          style={styles.image}
          source={require('./assets/tenisPrincipal.png')}
        >

        </Image>
        <View style={styles.areaformulario}>
          <Text style={styles.textoNome}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={(nome) => setNome(nome)}
          ></TextInput>

          <Text style={styles.textoNome}>CPF:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu cpf"
            onChangeText={(cpf) => setCpf(cpf)}
          ></TextInput>
          
          <View style={styles.areaSexo}>
            <Text style={styles.textoNome}>pagar boletinhos:</Text>
            <Picker
              style={styles.pickerSexo}
              selectedValue={pagamento}
              onValueChange={(itemValue, itemIndex) => setPagamento(itemValue)}
            >
                  {metodoItems}
            </Picker>
        
          </View>
          

          <View style={styles.areaSexo}>
            <Text style={styles.textoNome}>Tenis:</Text>
            <Picker
              style={styles.pickerSexo}
              selectedValue={tenis}
              onValueChange={(itemValue, itemIndex) => setTenis(itemValue)}
            >
                  {tenisItems}
            </Picker>
        
          </View>
          

          <Text style={styles.textoNome}>Telefone:</Text>
          <TextInput
            style={{ borderBottomWidth: 1, padding: 10, fontSize: 16 }}
            placeholder="(99)9999-9999"
            value={telefone}
            keyboardType="numeric"
            onChangeText={(text) => setTelefone(formatPhoneNumber(text))}
            maxLength={15}
          ></TextInput>        

          <View style={styles.limiteArea}>
            <Text style={styles.textoNome}>Imagem atual: </Text>
            <Text style={styles.limiteTexto}>{limite.toFixed(0)}</Text>
          </View>

          <View style={styles.areaSlider}>
            <Slider
              minimumTrackTintColor="#a542aa"
              minimumValue={0}
              maximumValue={3}
              step={1}
              value={limite}
              onValueChange={(limite) => {setLimite(limite); mudarImagem(limite);}}
            >

            </Slider>
            <Image
              style={styles.image2}
              source={imagem}
            ></Image>
          </View>

          <View style={styles.areaEstudante}>
            <Text style={styles.textoNome}>Atleta</Text>
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
      </View>
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  imagem: {
    width: 200,
    height: 200,
    marginTop: 20,
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
    flexDirection: 'column',
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
    flex:1,
    flexDirection: "column",
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
    resizeMode:"contain",
  },
  image2:{
    backgroundColor: "#ff0",
    width: 100, 
    height: 100,
    top: -3,
    marginHorizontal: 'auto',
    marginVertical: 5,
  }
  });
