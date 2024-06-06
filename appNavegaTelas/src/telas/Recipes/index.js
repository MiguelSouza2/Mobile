import React from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";




export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../img/waves_background.png")}>
        <ScrollView>
          <View style={styles.main_content}>
            <View>
              <Text style={styles.text_title}>Receitas</Text>
            </View>
            <Text style={styles.text_subtitle}>Receitas de bolo:</Text>
            <View>
              <Text style={styles.text_title}>Bolo de fubá:</Text>

              <View style={styles.view_paragraph}>
                <Text style={styles.text_subtitle}>Ingredientes:</Text>
                <Text >
                  4 ovos médios;{"\n"}

                  1 xícara de chá de óleo (240 ml);{"\n"}

                  1 e 1/2 xícara de chá de açúcar (300 gramas);{"\n"}

                  1 xícara de chá de leite (240 ml);{"\n"}

                  1 e 1/2 xícara de chá de fubá mimoso (180 gramas);{"\n"}

                  1 xícara de chá de farinha de trigo (140 gramas);{"\n"}

                  1 colher de sopa de fermento químico em pó (fermento para bolo);{"\n"}

                  1 pitada de sal; {"\n"}

                  Manteiga e farinha para untar e enfarinhar; {"\n"}
                </Text>
              </View>

              <Text style={styles.text_subtitle}>Modo de Preparo:</Text>
              <View style={styles.view_paragraph}>
                <Text>
                  1. Preaqueça o forno a 180°C. {"\n"}

                  2. Em uma tigela, misture o fubá, a farinha de trigo e o açúcar;{"\n"}

                  3. Acrescente o óleo, o leite e os ovos. Mexa bem até formar uma massa homogênea;{"\n"}

                  4. Por último, adicione o fermento em pó e misture delicadamente;{"\n"}

                  5. Despeje a massa em uma forma untada e enfarinhada;{"\n"}

                  6. Leve ao forno preaquecido por cerca de 30-40 minutos, ou até que um palito inserido no centro do bolo saia limpo.{"\n"}
                </Text>
              </View>
              <View style={styles.view_paragraph}>
                <Text>
                  Pronto, agora é só deixar esfriar um pouquinho e se deliciar com o bolo de fubá!
                </Text>
              </View>
            </View>
            <View>

            </View>


          </View>
        </ScrollView>
      </ImageBackground>

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

  text_title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
  text_subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
  },
  text_topics: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000'
  },
  view_paragraph: {
    fontSize: 10,
    fontWeight: 'italic',
    padding: 5
  }
});
