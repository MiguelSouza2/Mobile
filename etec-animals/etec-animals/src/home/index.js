import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function TelaPrincipal({navigation}) {
  return (
    <View style={styles.container}>
      {/* fundo roxo do header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Tela Principal</Text>
        <Text style={styles.subHeaderText}>Etec Animals</Text>
        <Image
          source={require("../../assets/icon/icon_main.png")}
          style={styles.logo}
        />
      </View>
      <View style={{
        backgroundColor: "#FFF",
        height: 5,
        width: "100%",
      }}></View>

      {/* img de fundo */}
      <Image
        source={require("../../assets/bg-imgs/imagem2.png")}
        style={styles.backgroundImage} blurRadius={3}
      />

      
      <View style={styles.buttonContainer}>
        <Text style={styles.welcomeText}>Bem Vindo(a) ao</Text>
        <Text style={styles.highlightText}>Etec Animals</Text>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Cadastro_Animal')}>
          <Text style={styles.buttonText}>Cadastrar Animal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Agendar_Consulta')}>
          <Text style={styles.buttonText}>Agendar Consulta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Backbutton} onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.BackbuttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#9b59b6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  headerText: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
  },
  subHeaderText: {
    color: "#fff",
    fontSize: 24,
  },
  logo: {
    width: 80,
    height: 80,
  },
  backgroundImage: {
    flex: 1,
    width: 437,
    height:  767,
    
  },
  buttonContainer: {
    position: "absolute",
    top: "35%",  
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#f7d9f0",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  welcomeText: {
    fontSize: 28,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 10,
  },
  highlightText: {
    fontSize: 22,
    color: "#000",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#9b59b6",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
