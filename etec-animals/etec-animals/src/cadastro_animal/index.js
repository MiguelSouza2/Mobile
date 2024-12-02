import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";

export default function CadastroAnimal({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/bg-imgs/imagem3.png")}
          style={styles.headerImage}
          resizeMode="cover"
          blurRadius={5}
        />
        <Text style={styles.pageTitle}>Cadastro </Text>
        <Text style={styles.subtitle}>Animais</Text>
      </View>

      <View style={styles.separator}></View>

      {/* bg roxo */}
      <View style={styles.formContainer}>
        {/* começo do form */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Nome do Animal:</Text>
          <TextInput style={styles.inputField} placeholder="Digite o nome do Animal:" />

          <Text style={styles.inputLabel}>ID de Identificação:</Text>
          <TextInput style={styles.inputField} placeholder="Digite o ID do Animal" keyboardType="numeric" />

          <Text style={styles.inputLabel}>Espécie:</Text>
          <TextInput style={styles.inputField} placeholder="Digite a espécie do animal" />

          <Text style={styles.inputLabel}>Idade:</Text>
          <TextInput style={styles.inputField} placeholder="Digite a idade do animal" />

          <Text style={styles.inputLabel}>Sexo:</Text>
          <TextInput style={styles.inputField} placeholder="Digite o sexo do animal" secureTextEntry={true} />

          <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.submitButtonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: "474",
    height: "490",
    position: "absolute",
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 40,
  },
  formContainer: {
    flex: 2,
    backgroundColor: "#9b59b6", 
    alignItems: "center",
    paddingTop: 20,
    top: 10,
  },
  form: {
    backgroundColor: "#d3b2f7",
    width: "85%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 16,
    color: "#000",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  inputField: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "#6c3483", 
    width: "100%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  backButtonText: {
    marginTop: 10,
  },
  separator: {
    backgroundColor: "#FFF",
    height: 5,
    width: "100%",
    top: 10,
  }
});
