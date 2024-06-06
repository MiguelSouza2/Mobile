import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView } from "react-native";




export default function Principal({ navigation }) {
  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Highlights') {
              iconName = focused
                ? 'home-outline'
                : 'bed-outline';
            } else if (route.name === 'Recipes') {
              iconName = focused ? 'person-outline' : 'body-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'people-outline' : 'happy-outline';
            }
  
            //aqui define os ícones que irão aparecer nas Tabs
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3f64c7',
          inactiveTintColor: '#a22446',
          
          
        }}
      >
        <Tab.Screen name="Destaques" component={Highlights}></Tab.Screen>
        <Tab.Screen name="Receitas" component={Recipes}></Tab.Screen>
        <Tab.Screen name="Sobre" component={About}></Tab.Screen>
      </Tab.Navigator>
    );
  }
  
  return (

    <View style={styles.container}>
      <ImageBackground source={require("../../img/waves_background.png")}>
        <ScrollView></ScrollView>
        <View style={styles.main_content}>
          <View>
            <Text style={styles.text_title}>Highlights</Text>
          </View>
          <Text style={styles.text_subtitle}>Receitas do dia:</Text>
          <View>
            <Text style={styles.text_title}>Pipoca de Sagu:</Text>

            <View style={styles.view_paragraph}>
              <Text style={styles.text_subtitle}>Ingredientes:</Text>
              <Text>
                1 xícara de sagu
                2 xícaras de água
                Óleo para fritar
                Sal a gosto
              </Text>
            </View>

            <Text style={styles.text_subtitle}>Modo de Preparo:</Text>
            <View style={styles.view_paragraph}>
              <Text style={styles.text_topics}>
                Hidratação do Sagu:
              </Text>
              <Text >
                Coloque o sagu em uma tigela e cubra com as 2 xícaras de água.
                Deixe de molho por pelo menos 1 hora. Isso vai fazer o sagu inchar.
              </Text>
            </View>
            <View style={styles.view_paragraph}>
              <Text style={styles.text_topics}>
                Secagem:
              </Text>
              <Text>
                Após o sagu hidratar, escorra bem a água e seque os grãos com um pano de prato limpo ou papel toalha. Eles precisam estar bem secos para não estourar o óleo na hora de fritar.
              </Text>
            </View>
            <View style={styles.view_paragraph}>
              <Text style={styles.text_topics}>
                Fritura:
              </Text>
              <Text>
                Em uma panela funda, aqueça o óleo em fogo médio-alto.
                Coloque pequenas porções de sagu hidratado e seco no óleo quente. Cuidado, pois pode espirrar.
                Deixe fritar até que os grãos fiquem estufados e levemente dourados, cerca de 1 a 2 minutos.
                Retire com uma escumadeira e coloque sobre papel toalha para escorrer o excesso de óleo.
              </Text>
            </View>
          </View>
          <View>

          </View>
        </View>
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
