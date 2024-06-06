import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  function clique(){
    alert("VOCÊ CLICOU NO BOTÃO JOW");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Meu nome é Sor Luizinho do Mustang verde</Text>
      <Text style={styles.idade}>Minha idade é de 18 anos</Text>
      <Text style={styles.cidade}>Moro na Barra do Chapéu</Text>
      <TextInput></TextInput>
      <Button 
        title='Clique aqui' 
        onPress={clique}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome:
  {
    fontSize: 45,
    color: '#aa3',
  },
  idade:
  {
    fontSize: 30,
    color: 'red',
  },
  cidade:
  {
    color: 'blue',
    fontSize: 34,
    fontStyle: 'italic',
    margin: 10
  },
  
});
