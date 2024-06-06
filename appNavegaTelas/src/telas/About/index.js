import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from 'react';




export default function Principal({ navigation }) {
  const [duvida, setDuvida] = useState('');
  function submit() {
    alert("Dúvida enviado com sucesso! Aguarde a resposta da nossa equipe. Duvida: " + duvida)
  }

  return (
    <View style={styles.container}>
      <View style={styles.main_content}>
        <View style={styles.text_title}>
          <Text>Quem somos?</Text>
        </View>
        <View style={styles.view_paragraph}>
          <Text>
            Prazer, esse aplicativo foi desenvolvido por apenas uma pessoa, eu, Miguel Isack, somente com o objetivo de desenvolver as habilidades aprendidas na aula.
          </Text>
        </View>

        <View style={styles.text_title}>
          <Text>Por que desse aplicativo?</Text>
        </View>
        <View style={styles.view_paragraph}>
          <Text>
            Nosso aplicativo de receitas de comidas foi cuidadosamente desenvolvido com a missão de oferecer uma experiência culinária única e satisfatória para todos os usuários. Criado a partir dos conhecimentos adquiridos durante as aulas de Programação de Aplicativos Mobile (PAM), nosso objetivo principal é fornecer uma plataforma intuitiva e fácil de usar, repleta de deliciosas receitas para inspirar suas aventuras na cozinha. Desde pratos tradicionais até criações inovadoras, nosso aplicativo é uma fonte confiável para explorar novos sabores, aprender técnicas culinárias e compartilhar suas próprias criações com a comunidade gastronômica.
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.view_paragraph}>
          Tem alguma dúvida? Compartilhe conosco!
        </Text>
        <TextInput
        style={styles.text_input}
          placeholder="..."
          onChangeText={duvida => setDuvida(duvida)}
        ></TextInput>
        <Button
          title="Enviar"
          onPress={() => submit()}
        ></Button>
      </View>
    </View>
  )
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_content: {
    padding: 10,
  },
  view_paragraph: {
    fontSize: 10,
    fontWeight: 'italic',
    padding: 10,
    backgroundColor: '#f0f6ff',
    borderRadius: 10,
  },
  text_title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
  text_input: {
    borderWidth: 1,
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  }
});
