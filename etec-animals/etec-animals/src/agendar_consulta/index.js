import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";

export default function Agendamento({ navigation }) {
  return (
    <View style={styles.container}>
        
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/bg-imgs/imagem4.png")}
          style={styles.headerImage}
          resizeMode="cover"
          blurRadius={5}
        />
        <Text style={styles.pageTitle}>Agendar consulta</Text>
      </View>

      <View style={styles.whiteBar}></View>

      <View style={styles.contentContainer}>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Data e Horário:</Text>
          <TextInput style={styles.inputField} placeholder="Digite a data e o horário desejado da consulta:" />

          <Text style={styles.inputLabel}>ID de Identificação:</Text>
          <TextInput style={styles.inputField} placeholder="Digite o ID do Animal" keyboardType="numeric" />

          <Text style={styles.inputLabel}>Especialidade:</Text>
          <TextInput style={styles.inputField} placeholder="Digite a especialidade do veterinário" />

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Agendar</Text>
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
    width: 200,
    marginTop: 150,
  },
  whiteBar: {
    backgroundColor: "#FFF",
    height: 5,
    width: "100%",
    top: 100,
  },
  contentContainer: {
    flex: 2,
    backgroundColor: "#9b59b6",
    alignItems: "center",
    paddingTop: 20,
    top: 100,
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
  backButtonText: {
    marginTop: 10,
  }
});
